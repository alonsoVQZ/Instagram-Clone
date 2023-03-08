from app.models import db, environment, SCHEMA, Media

def seed_medias():
    objects = [
        Media(
            url = "https://m.media-amazon.com/images/I/819M6dr91FL._AC_SL1500_.jpg",
            product_id = 1,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/413HpGG6ypL._AC_SL1000_.jpg",
            product_id = 1,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/513CJqnFlJL._AC_SL1000_.jpg",
            product_id = 1,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SL1500_.jpg",
            product_id = 2,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/717xSjyDRzL._AC_SL1500_.jpg",
            product_id = 2,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71YqHRYSluL._AC_SL1500_.jpg",
            product_id = 2,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/91vAUToHkcL._AC_SL1500_.jpg",
            product_id = 3,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/81r2JOFRgdL._AC_SL1500_.jpg",
            product_id = 3,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/91ZYUosdvvL._AC_SL1500_.jpg",
            product_id = 3,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/91wZ5MtyS7L._AC_SL1500_.jpg",
            product_id = 4,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/918xUzC4YnL._AC_SL1500_.jpg",
            product_id = 4,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/813QZ+bHWyL._AC_SL1500_.jpg",
            product_id = 4,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/81JHfYA6LSL._AC_SL1500_.jpg",
            product_id = 5,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/81sV9T4I50L._AC_SL1500_.jpg",
            product_id = 5,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/81ooIyzCPEL._AC_SL1500_.jpg",
            product_id = 5,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/51eOztNdCkL._SL1500_.jpg",
            product_id = 6,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/612YEtRWckL._SL1500_.jpg",
            product_id = 6,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/61BEpu+HTAL._SL1500_.jpg",
            product_id = 6,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71eXNIDUGjL._AC_SL1500_.jpg",
            product_id = 7,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/61XufEFo1dL._AC_SL1500_.jpg",
            product_id = 7,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/6190kdGdHBL._AC_SL1500_.jpg",
            product_id = 7,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/61C3xYVKtZL._AC_SL1500_.jpg",
            product_id = 8,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/715M+VM3kCL._AC_SL1500_.jpg",
            product_id = 8,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71DrKCQnC8L._AC_SL1500_.jpg",
            product_id = 8,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/814Rm4HxFIL._AC_SL1500_.jpg",
            product_id = 9,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/91CX934OmTL._AC_SL1500_.jpg",
            product_id = 9,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/91ab8io3yKL._AC_SL1500_.jpg",
            product_id = 9,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/81piWyfMXHL._AC_UX575_.jpg",
            product_id = 10,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71nPJETAW3L._AC_UY695_.jpg",
            product_id = 10,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71EFlavz0iL._AC_UX575_.jpg",
            product_id = 10,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/61jSCoKrh-L._AC_UX569_.jpg",
            product_id = 11,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/7116H5fEmVL._AC_UX569_.jpg",
            product_id = 11,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/719prrX6PML._AC_UX569_.jpg",
            product_id = 11,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71c017hL8SL._AC_SL1412_.jpg",
            product_id = 12,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71aFfytvisL._AC_SL1500_.jpg",
            product_id = 12,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/51-ZpNIsp6L._AC_SL1323_.jpg",
            product_id = 12,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/51qpGgTmqzL._AC_SL1500_.jpg",
            product_id = 12,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/51JbsHSktkL._AC_SL1500_.jpg",
            product_id = 13,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71T9bXj3NdL._AC_SL1500_.jpg",
            product_id = 13,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/61OOL7EOTVL._AC_SL1500_.jpg",
            product_id = 13,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/81QW6DIlRKL._AC_SL1500_.jpg",
            product_id = 14,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/81ZLqpDvWoL._AC_SL1500_.jpg",
            product_id = 14,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/91eLtrV5IUL._AC_SL1500_.jpg",
            product_id = 14,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71en4+xk9RL._AC_SL1500_.jpg",
            product_id = 15,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71iO3DYtPUL._AC_SL1500_.jpg",
            product_id = 15,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/61sopABZv2L._AC_SL1500_.jpg",
            product_id = 15,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71oMWqmXj9L._AC_SL1500_.jpg",
            product_id = 16,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/71mkTVMwSPL._AC_SL1500_.jpg",
            product_id = 16,
        ),
        Media(
            url = "https://m.media-amazon.com/images/I/8101kPzfo4L._AC_SL1500_.jpg",
            product_id = 16,
        ),
    ]
    db.session.bulk_save_objects(objects)
    db.session.commit()


def undo_medias():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.medias RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM medias")

    db.session.commit()