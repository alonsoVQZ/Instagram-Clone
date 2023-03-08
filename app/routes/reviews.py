from flask import Blueprint, request, jsonify
from app.models import db, Product, OrderProduct, Order, Review
from flask_login import UserMixin, current_user

reviews = Blueprint('reviews', __name__)

@reviews.route('', methods=['POST'])
def reviews_route():
    if request.method == 'POST':
        data = request.json
        print("************************************************")
        print(current_user.get_id())
        newReview = Review(**{
            "user_id": current_user.get_id(),
            "product_id": data["productId"],
            "rating": data["rating"],
            "headline": data["headline"],
            "comment": data["comment"],
        })
        db.session.add(newReview)
        db.session.commit()
        return { "message": "Review created" }

@reviews.route('/<int:id>', methods=["GET", "DELETE", "PUT"])
def reviews_id(id):
    review = Review.query.get(id)
    if request.method == "GET":
        if(review):
            return review.data()
        return { "error": "Review not found." }
    if request.method == "DELETE":
        if(review):
            db.session.delete(review)
            db.session.commit()
            return { "message": "Review successfully removed." }
        return { "error": "Review not found" }
    if request.method == "PUT":
        data = request.json
        if(review):
            review.rating = data["rating"]
            review.headline = data["headline"]
            review.comment = data["comment"]
            db.session.commit()
            return { "message": "Review successfully edited." }
        return { "error": "Review not found." }
