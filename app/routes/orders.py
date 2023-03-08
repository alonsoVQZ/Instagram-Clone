from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, Order, OrderProduct
from .products import orders_products

orders = Blueprint('orders', __name__)

orders.register_blueprint(orders_products, url_prefix='/products')

@orders.route('', methods=['GET', 'POST'])
def orders_post():
    if request.method == 'GET':
        response = Order.query.filter_by(user_id=1).all()
        listOrders = [order.data_orders_products() for order in response]
        return listOrders
    if request.method == 'POST':
        data = request.json
        newOrder = Order(**{
            "user_id": 1,
            "delivered": False,
            "subtotal": data["subtotal"],
        })
        db.session.add(newOrder)
        db.session.commit()
        for element in data["cart"]:
            newOrderProduct = OrderProduct(**{
                "order_id": newOrder.data()["id"],
                "product_id": element[0]["id"],
                "quantity": element[1],
            })
            db.session.add(newOrderProduct)
            db.session.commit()
        return newOrder.data()

@orders.route('/<int:id>', methods=['DELETE'])
def orders_id(id):
    if request.method == 'DELETE':
        order = Order.query.get(id)
        db.session.delete(order)
        db.session.commit()
        return { "message": "Order deleted" }

