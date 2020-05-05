import io

import torch
import torchvision.transforms as transforms
from PIL import Image


def transform_image(image_bytes):
    transform = transforms.Compose([transforms.Resize(28),
                                    transforms.CenterCrop(28),
                                    transforms.ToTensor()])
    image = Image.open(io.BytesIO(image_bytes)).convert('F')
    return transform(image).unsqueeze(0)


class BatchnormCNN:
    def __init__(self):
        self.model = torch.load('models/mnist/cnn/mnist_cnn.pt', map_location=torch.device('cpu'))
        self.model.eval()

    def get_mnist_prediction(self, image_bytes, decimals=2):
        tensor = transform_image(image_bytes=image_bytes)
        with torch.no_grad():
            outputs = self.model.forward(tensor)
            confidence = torch.nn.functional.softmax(outputs, dim=1)
            confidence = torch.round(confidence * 10 ** decimals) / (10 ** decimals)
            return torch.argmax(outputs).item(), confidence.flatten().tolist()
