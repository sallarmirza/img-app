from pydantic import BaseModel,EmailStr,Field
from typing import Optional

class UserBase(BaseModel):
    username:str=Field(...,min_length=3,max_length=50)
    email:EmailStr

class UserResponse(UserBase):
    id:int
    profile_pic:Optional[str]=None
    class Config:
        from_attributes=True