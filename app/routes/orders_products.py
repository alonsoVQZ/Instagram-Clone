from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, Order, OrderProduct

op = Blueprint('op', __name__)


@op.route('/<int:id>', methods=['PUT', 'DELETE'])
@login_required
def orders_products(id):
    order_product = OrderProduct.query.get(id)
    if not order_product:
        return { "error": "Order Product not found." }
    
    order = Order.query.get(order_product.data()["order_id"])
    if not order:
        return { "error": "Order not found." }
    
    if request.method == 'PUT':
        data = request.json
        print("***************************")
        print("***************************")
        print("***************************")
        print("***************************")
        print(data["quantity"])
        order_product.quantity = data["quantity"]
        db.session.commit()
        ordersProducts = order_product.query.filter_by(order_id=order_product.data()["order_id"]).all()
        new_subtotal = sum([int(order_product.data_product()["quantity"]) * order_product.data_product()["product"]["price"]  for order_product in ordersProducts])
        order.subtotal = new_subtotal
        db.session.commit()
        return { "message": "Item updated" }

    if request.method == 'DELETE':
        db.session.delete(order_product)
        db.session.commit()
        ordersProducts = order_product.query.filter_by(order_id=order_product.data()["order_id"]).all()
        if ordersProducts:
            newOrderSubtotal = sum([int(order_product.data_product()["quantity"]) * order_product.data_product()["product"]["price"]  for order_product in ordersProducts])
            order.subtotal = newOrderSubtotal
            db.session.commit()
            return { "message": "Item deleted" }
        db.session.delete(order)
        db.session.commit()
        return { "message": "Order deleted" }