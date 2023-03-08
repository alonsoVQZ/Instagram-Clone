from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class ProductMedia(db.Model):
    __tablename__ = 'Products_Medias'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    
    id = db.Column(db.Integer, primary_key=True)

    product_id = db.Column(db.Integer, db.ForeignKey('Products.id'), nullable=False)
    media_id = db.Column(db.Integer, db.ForeignKey('Medias.id'), nullable=False)

    product = db.relationship("Product", back_populates="products_medias")
    media = db.relationship("Media", back_populates="products_medias")

    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    def data(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "media_id": self.media_id,
        }

    def data_medias(self):
        return {
            "id": self.id,
            "medias": self.medias,
        }