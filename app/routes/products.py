from flask import Blueprint, request, jsonify
from app.models import db, Product, OrderProduct, Order

products = Blueprint('products', __name__)
# orders_products = Blueprint('orders_products', __name__)

@products.route('/search', methods=['POST'])
def products_search():
    data = request.json
    response = Product.query.filter(Product.name.ilike(f'%{data["data"]}%')).all()
    if response:
        products = [product.data() for product in response]
        return jsonify(products)
    return { "error": "Products not found" }


@products.route('/<int:id>')
def products_ids(id):
    product = Product.query.get(id)
    if product:
        return product.data()
    return { "error": "Product not found" }

@products.route('/main/<int:id>')
def products_id(id):
    product = Product.query.get(id)
    if product:
        return product.data_medias()
    return { "error": "Product not found" }

# @orders_products.route('/<int:id>', methods=['DELETE'])
# def orders_id(id):
#     if request.method == 'DELETE':
#         orderProduct = OrderProduct.query.get(id)
#         db.session.delete(orderProduct)
#         db.session.commit()
#         ordersProducts = OrderProduct.query.filter_by(order_id=orderProduct.data()["order_id"]).all()
#         if ordersProducts:
#             newOrderSubtotal = sum([int(orderProduct.data_product()["quantity"]) * orderProduct.data_product()["product"]["price"]  for orderProduct in ordersProducts])
#             order = Order.query.get(orderProduct.data()["order_id"])
#             order.subtotal = newOrderSubtotal
#             db.session.commit()
#             return { "message": "Items deleted" }
#         order = Order.query.get(orderProduct.data()["order_id"])
#         db.session.delete(order)
#         db.session.commit()
#         return { "message": "Order deleted" }
        
