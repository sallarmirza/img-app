from fastapi import APIRouter
import os

router=APIRouter(
    prefix="/gallery",tags=['Gallery']
)

UPLOAD_DIR="uploads"

@router.get("/")
def get_gallery():
    if not os.path.exists(UPLOAD_DIR):
        return {"images":[]}
    
    files=os.listdir(UPLOAD_DIR)
    image_urls=[f"/uploads/{f}" for f in files if f.endswith((".png",".jpg",".jpeg"))]
    
    return {"images":image_urls}