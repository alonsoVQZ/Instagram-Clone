from app.models import db, environment, SCHEMA, Product

def seed_products():
    objects = [
        Product(
            seller_id = 1,
            department_id = 4,
            price = 909.00,
            name = "DJI Mini 3 Camera Drone 4K HDR Quadcopter with RC Smart Remote Controller + Fly More Kit CP.MA.00000613.01 with Extended Protection Bundle with Deco Gear Backpack + FPV VR Viewer Pilot Headset",
            description = "DJI USA AUTHORIZED - INCLUDES FULL USA WARRANTY + EXCLUSIVE 2 Year Extended Warranty - Mini Size, Powerful Imaging - DJI Mini 3 features an extended battery life, 4K HDR video, and intelligent features to capture stunning aerial imagery effortlessly. Under 249 g | Extended Battery Life | 4K H",
            discount = 10,
            stock = 100
        ),
        Product(
            seller_id = 1,
            department_id = 2,
            price = 1223.45,
            name = "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos",
            description = "24.1 Megapixel CMOS (APS-C) sensor with is 100–6400 (H: 12800)",
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 3,
            price = 1696.99,
            name = "LG C2 Series 65-Inch Class OLED evo Gallery Edition Smart TV OLED65C2PUA, 2022 - AI-Powered 4K, Alexa Built-in",
            description = "Made for movie buffs, gamers and sports fanatics, our most popular OLED in our premium lineup of TVs has gotten even more impressive with brighter colors, a new, more advanced processor and sleeker, slimmer bezel that won’t go unnoticed.",
            discount = 10,
            stock = 20
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 20.53,
            name = "NERF Mini Foam Sports Ball Set - Foam Football, Soccer Ball + Basketball Set - NERF Soft Foam Sports Set for Kids - Multicolor",
            description = "ALL SPORT SET: This mini foam sports ball set is the perfect gift for any young sports fan and has everything they need for hours of endless sports fun!",
            discount = 5,
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 49.95,
            name = "AFA Tooling - Set of 4 Heavy Duty Rubber Wheel Chocks w/Ez-Carry Handles | RV Chock Block for Front and Back Tires | Quick Grip Ribbed Design | Great for Your Camper, Trailer, RV, Truck, Car or ATV",
            description = "DUAL WHEEL CHOCK SET: This 4-Pack of rugged wheel chocks let you quickly chock a full axle of tires - both front and back - to give you the peace of mind that your car, truck, trailer, ATV, or RV will stay where you parked it (whether trailered or on the ground).",
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 499.99,
            name = "PlayStation 5 Console CFI-1215A01X",
            description = "Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.",
            discount = 3,
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 1165.53,
            name = "Apple 2022 MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Silver",
            description = "BIG, BEAUTIFUL DISPLAY — The 13.6-inch Liquid Retina display features over 500 nits of brightness, P3 wide color and support for 1 billion colors for vibrant images and incredible detail.",
            discount = 15,
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 59.99,
            name = "Razer DeathAdder V2 Pro Wireless Gaming Mouse: 20K DPI Optical Sensor - 3X Faster Than Mechanical Optical Switch - Chroma RGB Lighting - 70 Hr Battery Life - 8 Programmable Buttons - Classic Black",
            description = "Focus plus 20K DPI Optical Sensor: Auto-calibrates across mouse mat and reduces cursor drift from lift-off and landing for industry-leading precision",
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 418.99,
            name = "ASUS ROG Crosshair VIII Dark Hero AMD AM4 X570S Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 14+2 Ti Power Stages, PCH Heatsink, Wi-Fi 6, 2.5 Gbps LAN, USB 3.2 Gen 2 Type-C",
            description = "AMD AM4 socket: Ready for 2nd, 3rd Gen AMD Ryzen processors and 3rd Gen AMD Ryzen processors.Bluetooth v5.1",
            discount = 8,
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 79.94,
            name = "Nike Men's Training Running Shoe, Blue, EU",
            description = "Sports shoes",
            discount = 0,
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 7.99,
            name = "ACTLATI Kids Winter Knitted Beanie Hat Colorful Pompom Ears Ski Hat for Boy Girl(Ages 7-12)",
            description = "This thick knit beanie hat is made of high quality acrylic, with a super cute faux fur colorful pom pom, your kid will get so much compliment, and on the top which is warm, comfortable and safety. No itchy or allergic skin problems to kids. Use best fabric to care for your Child's most delicate skin.",
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 989.00,
            name = "SAMSUNG Galaxy S22 Ultra S9080 5G Dual-SIM 256GB 12GB RAM Factory Unlocked for All Carriers - Phantom Black",
            description = "Factory Unlocked For All Carriers - Phantom Black",
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 279.99,
            name = "Bose QuietComfort 45 Bluetooth Wireless Noise Cancelling Headphones - Triple Black",
            description = "Noise cancelling wireless headphones – The perfect balance of quiet, comfort, and sound. Bose uses tiny mics to measure, compare, and react to outside noise, cancelling it with opposite signals. Bluetooth range-up to 9 m (30 feet). Compatible App-Bose Music app",
            discount = 15,
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 19.99,
            name = "LEGO Star Wars 501st Clone Troopers Battle Pack 75345, Buildable Toy Set with AV-7 Anti Vehicle Cannon and Spring Loaded Shooter Plus 4 Characters",
            description = "With this Star Wars building toy kids build the Clone Squadron with 4 minifigures and an AV-7 anti-vehicle cannon recreate The Clone Wars scenes",
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 15.99,
            name = "Hasbro Gaming: Jenga Classic Game",
            description = "Pull out a block without crashing the stack to win at Jenga",
            discount = 25,
            stock = 1
        ),
        Product(
            seller_id = 1,
            department_id = 1,
            price = 136.67,
            name = "Explorer K2 Kayak, 2-Person Inflatable Kayak Set with Aluminum Oars, Manual and Electric Pumps",
            description = "Comfortable For Anyone: Kayak Includes An Adjustable Inflatable Seat With Backrest; Cockpit Designed For Comfort And Space",
            discount = 20,
            stock = 1
        ),
    ]
    db.session.bulk_save_objects(objects)
    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()