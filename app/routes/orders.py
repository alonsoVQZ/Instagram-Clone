from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, Order, OrderProduct
# from .orders_products import orders_products

orders = Blueprint('orders', __name__)


@orders.route('', methods=['GET', 'POST'])
@login_required
def orders_post():
    if request.method == 'GET':
        response = Order.query.filter_by(user_id=current_user.get_id()).all()
        listOrders = [order.data_orders_products() for order in response]
        return jsonify(listOrders)
    if request.method == 'POST':
        data = request.json
        newOrder = Order(**{
            "user_id": current_user.get_id(),
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
@login_required
def orders_id(id):
    if request.method == 'DELETE':
        order = Order.query.get(id)
        db.session.delete(order)
        db.session.commit()
        return { "message": "Order deleted" }



