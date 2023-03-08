from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Order(db.Model):
    __tablename__ = 'orders'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    delivered = db.Column(db.Boolean, nullable=False)
    subtotal = db.Column(db.Float, nullable=False)
    
    user = db.relationship("User", back_populates="orders")
    orders_products = db.relationship("OrderProduct", back_populates="order", cascade="all, delete-orphan")

    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    def data(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "delivered": self.delivered,
            "subtotal": self.subtotal,
        }

    def data_orders_products(self):
        orders_products_serialized = [order_product.data_product() for order_product in self.orders_products]
        return {
            "id": self.id,
            "delivered": self.delivered,
            "subtotal": self.subtotal,
            "orders_products": orders_products_serialized,
            "created_at": self.created_at,
        }