import React from 'react'

const SecondComponent = () => {
    const myCustomStyle = {
        color:'green',
        backgroundColor:'pink'
        
    }
  return (
    <div>
      <h4 style={{color:"red",backgroundColor:'yellow'}}>My second component called...</h4>
      <h3 style={myCustomStyle}>Hello</h3>
      <h1 style={myCustomStyle}>chirag</h1>
      <h2 style={{color:"brown",background:"green"}}>my name</h2>

    </div>
    
  )
}

export default SecondComponent