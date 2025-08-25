import requests

response = requests.post("http://127.0.0.1:5000/add", json={
    "ProductsName": "Mango",
    "Price": 100,
    "Quantity": 5,
    "Unit": 1
})
print(response.json())
