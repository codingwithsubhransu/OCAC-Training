import { useState } from 'react'
import TotalLayout from './Components/TotalLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center'>
      <TotalLayout />
    </div>
  )
}

export default App
