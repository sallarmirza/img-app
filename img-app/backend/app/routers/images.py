from fastapi import APIRouter, Form
from huggingface_hub import InferenceClient
import os
from dotenv import load_dotenv
from PIL import Image
import uuid

load_dotenv()

router = APIRouter(
    prefix="/images",
    tags=["Images"]
)

client = InferenceClient(
    provider="nebius",  
    api_key=os.environ["HF_TOKEN"]
)

@router.post("/generate")
def generate_image(prompt: str = Form(...)):
    image: Image.Image = client.text_to_image(
        prompt,
        model="black-forest-labs/FLUX.1-dev"
    )

    # Save to disk
    filename = f"uploads/{uuid.uuid4()}.png"
    image.save(filename)

    return {"message": "Image generated successfully!", "file_path": filename}
