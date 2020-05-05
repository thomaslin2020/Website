import requests

resp = requests.post("http://localhost:5000/predict",
                     files={"file": open('testing.png', 'rb')})
print(resp.json())
