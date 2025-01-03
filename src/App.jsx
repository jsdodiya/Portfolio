import React, { useState } from 'react'
import { use } from 'react'

function App() {
  var [a,b] = useState(69)
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-4'>
      <h1>{a}</h1>
      <button onClick={()=>b(a+2)}className='px-3 py-1 rounded-xl bg-green-500'>Click</button>
    </div>
  )
}

export default App
