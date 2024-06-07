import React from 'react'
import Team from './Pages/Team/Team'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Package from './Pages/Package/Package'
import Contact from './Pages/Contact/Contact'
import Rights from './Components/Rights/Rights'

function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Package/>
      <Team/>
      <Contact/> 
      <Rights/>
    </div>
  )
}

export default App