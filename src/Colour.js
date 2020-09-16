import React from 'react'
import "./App.css"

function Colour(props) {
  return (
    <div className="colour" style={{color: props.newColour}}>
      Disco fever!
    </div>
  )
}

export default Colour
