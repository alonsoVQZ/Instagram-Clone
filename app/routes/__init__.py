from flask import Blueprint
from .user import user
from .products import products
from .orders import orders
from .reviews import reviews
from .orders_products import op


api = Blueprint('api', __name__)


api.register_blueprint(user, url_prefix='/user')
api.register_blueprint(products, url_prefix='/products')
api.register_blueprint(orders, url_prefix='/orders')
api.register_blueprint(reviews, url_prefix='/reviews')
api.register_blueprint(op, url_prefix='/orders_products')

