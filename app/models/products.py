from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Product(db.Model):
    __tablename__ = 'products'


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    

    id = db.Column(db.Integer, primary_key=True)
    seller_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('sellers.id')), nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('departments.id')), nullable=False)

    name = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    discount = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String, nullable=False)
    stock = db.Column(db.Integer, nullable=False)

    reviews = db.relationship("Review", back_populates="product", cascade="all, delete-orphan")
    medias = db.relationship("Media", back_populates="product", cascade="all, delete-orphan")
    orders_products = db.relationship("OrderProduct", back_populates="product", cascade="all, delete-orphan")

    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    def data(self):
        medias_serialized = [media.data() for media in self.medias]
        reviews_serialized = [review.data() for review in self.reviews]
        reviews_rating = [int(review["rating"]) for review in reviews_serialized]
        reviews_sum = sum(reviews_rating)
        reviews_len = len(reviews_rating)
        reviews_avg = 0
        if reviews_len > 0:
            reviews_avg = reviews_sum / reviews_len
        return {
            "id": self.id,
            "seller_id": self.seller_id,
            "name": self.name,
            "price": self.price,
            "discount": self.discount,
            "description": self.description,
            "stock": self.stock,
            "medias": medias_serialized,
            "reviews": reviews_serialized,
            "reviews_avg": reviews_avg,
            "reviews_len": reviews_len,
        }
    
    def data_medias(self):
        medias_serialized = [media.data() for media in self.medias]
        return {
            "id": self.id,
            "medias": medias_serialized,
        }
