from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Address(db.Model):
    __tablename__ = 'addresses'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    country = db.Column(db.String, nullable=False)
    full_name = db.Column(db.String, nullable=False)
    number = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    address2 = db.Column(db.String, nullable=True)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    zip_code = db.Column(db.String, nullable=False)
    
    user = db.relationship("User", back_populates="addresses")
    
    def data(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "country": self.country,
            "full_name": self.full_name,
            "number": self.number,
            "address": self.address,
            "address2": self.address2,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code,
        }