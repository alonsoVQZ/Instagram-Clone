from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, Address

addresses = Blueprint('addresses', __name__)

@addresses.route('', methods=['GET', 'POST'])
@login_required
def orders_post():
    if request.method == 'GET':
        response = Address.query.filter_by(user_id=current_user.get_id()).all()
        addressesList = [address.data() for address in response]
        return jsonify(addressesList)
    if request.method == 'POST':
        data = request.json
        newAddress = Address(**{
            "user_id": current_user.get_id(),
            "country": data["country"],
            "full_name": data["fullName"],
            "number": data["number"],
            "address": data["address"],
            "address2": data["address2"],
            "city": data["city"],
            "state": data["state"],
            "zip_code": data["zipCode"],
        })
        db.session.add(newAddress)
        db.session.commit()
        return { "message": "Address created" }
    
@addresses.route('/<int:id>', methods=['GET', 'DELETE', 'PUT'])
@login_required
def addresses_id(id):
    address = Address.query.get(id)
    if not address:
        return { "error": "Address not found" }
    if request.method == 'GET':
        return address.data()
    if request.method == 'PUT':
        data = request.json
        address.country = data["country"]
        address.full_name = data["fullName"]
        address.number = data["number"]
        address.address = data["address"]
        address.address2 = data["address2"]
        address.city = data["city"]
        address.state = data["state"]
        address.zip_code = data["zipCode"]
        db.session.commit()
        return { "message": "Address updated" }
    if request.method == 'DELETE':
        db.session.delete(address)
        db.session.commit()
        return { "message": "Address deleted" }
    
@addresses.route('/<int:id>/default', methods=['PUT'])
@login_required
def addresses_id_default(id):
    address = Address.query.get(id)
    if not address:
        return { "error": "Address not found" }