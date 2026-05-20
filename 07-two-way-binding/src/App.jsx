import React from 'react'

const App = () => {

  const submitHandler = (e) => {

    e.preventDefault() 
    // to prevent the default behaviour of form which is to refresh the page when we click on submit button

    // console.log('Form Submitted');
    
    // console.log(e.target.value); 
    // this will give us the value of the input field but it will not work because we have not given any name to the input field
     
    console.log(e.target[0].value);
    
    
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div> 
  )
}
// to be done pending

export default App

