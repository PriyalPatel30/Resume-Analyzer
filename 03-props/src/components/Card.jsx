import React from 'react'

const Card = (props) => {

    // console.log(props.user, props.age);
    
  return (
    <div className="card">
        <img src={props.img}></img>
        <h1>{props.user}</h1>
        <p>This is my card</p>
        <button>Click me</button>
      </div>
  )
}

export default Card