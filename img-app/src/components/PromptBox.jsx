import React, { useState } from 'react'

export const PromptBox = () => {
    const [input,setInput]=useState("")
  return (
    <div>
        <input placeholder='Lets Create' value={input}
        onChange={(e)=>setInput(e.target.value)} />
    </div>
  )
}
