// function App() {
//   return 'hello'
// }

// export default App

// react arrow function export component
// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

//Fragement component : these are empty tags to contain and avouid extra divs
import React from 'react'

const App = () => {
  return (
    //Fragement start
    <> 
      <div id='one'>
        <div id='child1'>Hi</div>
        <div id='child2'>Hello</div>
      </div>
      <div id='two'>
        <div id='child3'>Namaste</div>
        <div id='child4'>Salam</div>
      </div>
    </> 
    // Fragement end
  )
}

export default App