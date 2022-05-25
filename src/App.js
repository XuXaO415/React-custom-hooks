import React from 'react'
import Counter from './Counter'
import MoodClicker from './MoodClicker'
import ColorPicker from './ColorPicker'
import SignupForm from './SignupForm'
import DogDetail from './DogDetail'
import './App.css'

function App() {
  return (
    <div className="App">
      <DogDetail />
      <SignupForm />
      <MoodClicker />
      <Counter />
      <ColorPicker />
    </div>
  )
}

export default App;
