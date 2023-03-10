from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Department(db.Model):
    __tablename__ = 'departments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String, nullable=False)
    
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    def data(self):
        return {
            self.id,
            self.name,
        }