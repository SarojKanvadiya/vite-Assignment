// import { useState } from 'react'

import './App.css'
import UserInfo, { Counter, Timer } from './Components/Assignments/Component Lifecycle and useEffect I/Q-1'
import DisplayPost from './Components/Assignments/Component Lifecycle and useEffect I/Q-2'
import ColorSelectionForm from './Components/Assignments/Transitioning to Vite and Project Setup/Q-1'
import RegisterationForm from './Components/Assignments/Transitioning to Vite and Project Setup/Q-2'
import FeedbackForm from './Components/Assignments/Transitioning to Vite and Project Setup/Q-3'

function App() {


  return (

    <>
    <ColorSelectionForm/>
    <RegisterationForm/>
     <FeedbackForm/> 

      <div className='container'>
        <UserInfo />
        <div className='count-time-container'>
        <Counter />
        <Timer />
        </div>
      </div>
      <DisplayPost />

    </>

  )
}

export default App
