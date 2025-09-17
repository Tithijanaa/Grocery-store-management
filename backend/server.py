from flask import Flask, request, jsonify
from products_dao import get_all_products, insert_product
from orders_dao import insert_order
from sql_connection import get_sql_connection

app = Flask(__name__)
connection = get_sql_connection()

@app.route('/')
def home():
    return "✅ Grocery WebApp Backend Running!"

@app.route('/getProducts', methods=['GET'])
def get_products():
    products = get_all_products(connection)
    return jsonify(products)

@app.route('/insertProduct', methods=['POST'])
def add_product():
    data = request.json
    product_id = insert_product(connection, data)
    return jsonify({"product_id": product_id})

@app.route('/insertOrder', methods=['POST'])
def add_order():
    data = request.json
    order_id = insert_order(connection, data)
    return jsonify({"order_id": order_id})

if __name__ == "__main__":
    app.run(port=5000, debug=True)