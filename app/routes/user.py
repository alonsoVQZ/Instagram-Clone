from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User

user = Blueprint('user', __name__)


@user.route('/session')
@login_required
def personal_session():
    return current_user.data()


@user.route('/email', methods=['POST'])
def personal_email():
    data = request.json
    account = User.query.filter(User.email == data["email"]).first()
    if account:
        return account.data_email()
    return {
            "code": 401,
            "error": "We cannot find an account with that email address"
        }


@user.route('/signin', methods=['POST'])
def user_sign_in():
    data = request.json
    account = User.query.get(data["id"])
    if account.check_password(data["password"]):
        login_user(account)
        return account.data()
    return {
            "code": 401,
            "error": "Your password is incorrect"
        }
        


@user.route('/signup', methods=['POST'])
def user_sign_up():
    data = request.json
    account = User.query.filter_by(email=data["email"]).first()
    if account:
        return { "error": "An account with this email is arleady in use."}
    else:
        print("********************")
        print(data)
        new_user = User(**{
            "first_name": data["firstName"],
            "last_name": data["lastName"],
            "email": data["email"],
            "password": data["password"],
        })
        db.session.add(new_user)
        db.session.commit()
        login_user(new_user)
        return new_user.data()


@user.route('/signout')
@login_required
def user_signout():
    logout_user()
    return {
        "message": "Logged out successfully"
    }