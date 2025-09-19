from fastapi import APIRouter, Form, HTTPException
from huggingface_hub import InferenceClient
from PIL import Image
import os
import uuid
from dotenv import load_dotenv

# Load .env
load_dotenv()

api_key = os.getenv("HF_TOKEN")
if not api_key:
    raise RuntimeError("HF_TOKEN not set in environment variables")

router = APIRouter(prefix="/images", tags=["Images"])

# Initialize Hugging Face inference client
client = InferenceClient(
    provider="nebius",
    api_key=api_key
)

@router.post("/generate")
def generate_image(prompt: str = Form(...)):
    try:
        image: Image.Image = client.text_to_image(
            prompt,
            model="black-forest-labs/FLUX.1-dev"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Image generation failed: {str(e)}")

    os.makedirs("uploads", exist_ok=True)
    filename = f"uploads/{uuid.uuid4()}.png"
    image.save(filename)

    return {
        "type": "image",
        "imageUrl": f"/uploads/{os.path.basename(filename)}"
    }
