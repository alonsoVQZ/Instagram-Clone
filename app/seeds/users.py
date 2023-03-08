from app.models import db, environment, SCHEMA, User

def seed_users():
    objects = [
        User(
            first_name = 'Demo',
            last_name = 'User',
            email = 'demo@user.com',
            password = '123456',
        ),
    ]
    db.session.bulk_save_objects(objects)
    db.session.commit()


def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()

    