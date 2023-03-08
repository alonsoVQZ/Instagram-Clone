from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Review(db.Model):
    __tablename__ = 'reviews'


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)

    rating = db.Column(db.Integer, nullable=False)
    headline = db.Column(db.String, nullable=False)
    comment = db.Column(db.String, nullable=False)
    
    user = db.relationship("User", back_populates="reviews")
    product = db.relationship("Product", back_populates="reviews")

    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    def data(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "rating": self.rating,
            "headline": self.headline,
            "comment": self.comment,
            "created_at": self.created_at,
            "user": self.user.data()
        }