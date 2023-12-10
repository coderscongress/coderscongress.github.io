import React from "react"
import ReactPlayer from "react-player"
import "../App.css"

function App() {
  return (
  <div><div><h1>My YouTube Blog</h1></div>
	<div className='flex-container'>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=gElUxLiHnJc"
      />
    </div></div>
  )
}

export default App