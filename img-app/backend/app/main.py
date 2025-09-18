from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from .routers import users, images  # adjust import as you have it
from . import database, models
import os

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# CORS for local dev (adjust origin(s) to your Vite port)
app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

# ensure uploads dir exists and serve static files
os.makedirs("uploads", exist_ok=True)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# include routers
app.include_router(users.router)
app.include_router(images.router)
