from flask import Flask, request, jsonify
from db_connection import get_db_connection
from Products import fetch_all_products,insert_new_product
import mysql.connector
import json

app = Flask(__name__)
db = get_db_connection()

@app.route('/', methods=['GET'])
def index():
    return "Welcome to the Grocery Store API"

@app.route('/products', methods=['GET'])
def get_products():
    products = fetch_all_products()
    return jsonify(products)

@app.route('/add', methods=['POST'])
def add_product():
    if not request.json:
        return jsonify({"error": "Invalid input"}), 400
    data = request.json
    print("Incoming data:", data)
    success = insert_new_product(data)
    if success:
        return jsonify({"message": "Product added successfully"}), 201
    else:
        return jsonify({"message": "Failed to add product"}), 400
    
if __name__ == "__main__":
    app.run(debug=True)
