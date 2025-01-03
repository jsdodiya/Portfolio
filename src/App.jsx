import React, { useState } from 'react'
import { use } from 'react'
import Products from './products'
function App() {
  var [a,b] = useState(69)
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-4 '>
     <Products num="value"/>

    </div>
  )
}

export default App
