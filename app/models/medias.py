from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Media(db.Model):
    __tablename__ = 'medias'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)

    url = db.Column(db.String, nullable = False)
    
    product = db.relationship("Product", back_populates="medias")

    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    def data(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "url": self.url,
        }