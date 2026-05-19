// import React from 'react'

// const App = () => {
//   return (
//     <div>hi its a div in states</div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {

//   // USESTATE HOOK  
//   // dont direclty interact with DOM in react, 
//   // we use state to change the value of num and name and then react will update the DOM for us

//   const [num, setNum] = useState(10)
//   const [name, setName] = useState('Pixie')

//   function changeNum(){
//     setNum(200)
//     setName('Erica')
//     console.log('hello');
    
//   }

//   return (
//     <div>
//       <h1>the value of num is {num}</h1>
//       <br/> 
//       <h1>the value of name is {name}</h1>
//       <br/>
//       <button onClick={changeNum}>Click here</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useState } from 'react'


const App = () => {

  const [Num, setNum] = useState(2)

  function increment(){
    setNum(Num + 1)
  }

  function decrement(){
    setNum(Num - 1)
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
    </div>
  )
}

export default App