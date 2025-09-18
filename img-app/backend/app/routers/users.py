from fastapi import APIRouter,Depends,UploadFile,File,Form
from sqlalchemy.orm import Session
from .. import models,database
from ..schemas import user_schema

import shutil
import uuid
import os
from ..database import get_db


router=APIRouter(
    prefix="/users",tags=["Users"]
)

@router.post("/register", response_model=user_schema.UserResponse)
def register_user(
    username: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    profile_pic: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    profile_path = None
    if profile_pic:
        file_ext = os.path.splittext(profile_pic.filename)[1]
        unique_name = f"{uuid.uuid4()}{file_ext}"
        profile_path = f"uploads/{unique_name}"

        # save file to uploads folder
        with open(profile_path, "wb") as buffer:
            shutil.copyfileobj(profile_pic.file, buffer)

    new_user = models.users(
        username=username,
        email=email,
        password=password,       # later: hash this
        profile_pic=profile_path # save path, not file object
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)  # refresh to get ID back
    return new_user
