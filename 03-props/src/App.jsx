import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className="parent"> 

      <Card user='Kate' age={35} img = 'https://images.unsplash.com/photo-1759549567944-bb5923888826?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Bush' age={30} img = 'https://plus.unsplash.com/premium_photo-1753227114328-996fb7f092b9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4NXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8' />

    </div>
  )
}

export default App