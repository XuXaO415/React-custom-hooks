import React from 'react'
import Counter from './Counter'
import MoodClicker from './MoodClicker'
import ColorPicker from './ColorPicker'
import './App.css'

function App() {
  return (
    <div className="App">
      <MoodClicker />
      <Counter />
      <ColorPicker />
    </div>
  )
}

export default App;
