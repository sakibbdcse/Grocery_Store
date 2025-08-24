import mysql.connector
from mysql.connector import Error

__connection = None;

def get_db_connection():
    print("Establishing connection to MySQL server...")
    global __connection
    if __connection is None:
        try:
            __connection = mysql.connector.connect(
                host='localhost',
                user='root',
                password='Root@1234',
                database='Grocery_Store'
            )
            if __connection.is_connected():
                print("Connection established successfully.")
        except Error as e:
            print(f"Error: {e}")
            __connection = None
    return __connection;