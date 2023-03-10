from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class OrderProduct(db.Model):
    __tablename__ = 'orders_products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)

    order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('orders.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)

    quantity = db.Column(db.String, nullable=False)

    order = db.relationship("Order", back_populates="orders_products")
    product = db.relationship("Product", back_populates="orders_products")

    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())



    def data(self):
        return {
            "id": self.id,
            "order_id": self.order_id,
            "product_id": self.product_id,
            "quantity": self.quantity,
        }

    def data_product(self):
        return {
            "id": self.id,
            "quantity": self.quantity,
            "product": self.product.data(),
        }