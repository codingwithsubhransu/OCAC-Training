import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import RecipeList from './Components/Recipe List/RecipeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />
      <div className="content">
        <RecipeList />
        <p>Hii Guys</p>
      </div>
    </div>
  )
}

export default App
