from fastapi import FastAPI
from .routers import users
from app import database, models
from fastapi.staticfiles import StaticFiles
import os
from .routers import images


models.Base.metadata.create_all(bind=database.engine)

app=FastAPI()

os.makedirs("uploads", exist_ok=True)   
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

app.include_router(users.router)
app.include_router(images.router)
