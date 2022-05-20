import React from "react";
import useToggleState from './hooks/useToggleState'
import './MoodClicker.css'

const MoodClicker = () => {
  const [isHappy, toggleIsHappy] = useToggleState(true)
  const [isDarkMode, toggleIsDarkMode] = useToggleState(false);
  return (
    <div className={isDarkMode ? 'Clicker-dark' : 'Clicker-light'}>
      <h1>{isHappy ? '😀' : '😭'}</h1>
      <button onClick={toggleIsHappy}>Change Mood</button>
      <button onClick={toggleIsDarkMode}>Toggle Dark/Light Mode</button>
    </div>

  )
}

export default MoodClicker;

// const [isHappy, setisHappy] = useState(true);
// const [isDarkMode, setIsDarkMode] = useState(false);
// const toggleMood = () => {
//     //!returns not mood !mood
//     //boolean not, negates true to false, false to true
//     setisHappy(mood => !mood)
// }

// const toggleIsDarkMode = () => {
//     setIsDarkMode(mode => !mode)
// }
