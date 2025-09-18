from fastapi import FastAPI
from .routers import users
from app import database, models


models.Base.metadata.create_all(bind=database.engine)

app=FastAPI()

app.include_router(users.router)
