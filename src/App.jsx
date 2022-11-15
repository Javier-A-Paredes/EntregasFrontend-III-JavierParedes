import { useState } from 'react'
import ClassComponent from './components/ClassComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ClassComponent />
  )
}

export default App
