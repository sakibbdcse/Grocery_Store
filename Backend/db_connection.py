import mysql.connector
from mysql.connector import Error

try:
    conn = mysql.connector.connect(
        host='localhost',
        user='root',
        password='Root@1234',
        database='Grocery_Store'
    )
    if conn.is_connected():
        print("Connected to MySQL server")
    cursor = conn.cursor()
    cursor.execute("SHOW DATABASES;")
    
    print("Databases:")
    for db in cursor:
        print(db[0])
    
except Error as e:
    print(f"connecting to MySQL Error: {e}")
    conn = None

finally:
    if conn.is_connected():
        cursor.close()
        conn.close()
        print("MySQL connection closed")