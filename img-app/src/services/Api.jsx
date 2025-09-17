import React, { useState } from 'react'
import { generateImage,getGallery, getProfile } from './api.js'


export const Api = () => {
    const [image,setImage]=useState(null)
    const [gallery,setGallery]=useState([])
    const [profile,setProfile]=useState(null)

    async function handleGenerate() {
        const result=await generateImage('A futuristic city at sunset');
        setImage(result.imageUrl)       
    }
    async function handleProfile() {
        const result=await getProfile();
        setProfile(result);
        
    }async function handleGallery() {
        const result=await getGallery();
        setProfile(result);
        
    }
  return (
    <div>
        <div className="testing">
            <h2>Api testing</h2>
            <button>generateImage</button>
            {image && <img src={image} alt={}/>}
        </div>
    </div>
  )
}
