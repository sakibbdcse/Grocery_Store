from db_connection import get_db_connection

def fetch_all_products():
    conn = get_db_connection()
    if not conn:
        print("Database connection is not established.")
        return False
    
    products = []
    try:
        cursor = conn.cursor()
        query = "SELECT products.Id, ProductsName, Price, Quantity, UnitName FROM products INNER JOIN units ON products.Unit = units.Id"
        cursor.execute(query)
        
        for (Id, ProductsName, Price, Quantity, UnitName) in cursor:
            products.append({
                "Id": Id,
                "ProductsName": ProductsName,
                "Price": Price,
                "Quantity": Quantity,
                "UnitName": UnitName,
            })
    except Exception as e:
        print(f"Error fetching products: {e}")
        return False
    finally:
        cursor.close()
        conn.close()
    return products

def insert_new_product(data):
    conn = get_db_connection()
    if not conn:
        print("Database connection is not established.")
        return False
    
    cursor = conn.cursor()
    query = "INSERT INTO products (ProductsName, Price, Quantity, Unit) VALUES (%s, %s, %s, %s)"
    values = (data["ProductsName"], data["Price"], data["Quantity"], data["Unit"])
    
    try:
        cursor.execute(query, values)
        conn.commit()
        print("Product inserted successfully.")
        return True
    except Exception as e:
        print(f"Error inserting product: {e}")
        conn.rollback()
        return False
    finally:
        cursor.close()
        conn.close()
        
def delete_product(product_id):
    conn = get_db_connection()
    if not conn:
        print("Database connection is not established.")
        return[]
    cursor = conn.cursor()
    query = "DELETE FROM products WHERE Id = %s"
    value = (product_id,)
    try:
        cursor.execute(query,value)
        conn.commit()
        print("Product deleted successfully.")
    except Exception as e:
        print(f"Error deleting product: {e}")
        conn.rollback()
    finally:
        cursor.close()
        