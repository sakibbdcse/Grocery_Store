import mysql.connector
from mysql.connector import Error


def get_db_connection():
    try:
        conn = mysql.connector.connect(
                host='localhost',
                user='root',
                password='Root@1234',
                database='Grocery_Store'
            )
        return conn
    except Exception as e:
        print("Connection error:", e)
        return None