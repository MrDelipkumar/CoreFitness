import React, { Suspense } from 'react'
const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Package = React.lazy(() => import("./Pages/Package/Package"));
const Team = React.lazy(() => import("./Pages/Team/Team"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact"));
const Rights = React.lazy(() => import("./Components/Rights/Rights"));
function App() {
  return (
    <div>
      <Suspense fallback={<div><h1>Loading....</h1></div>}>
      <Home/>
      <About/>
      <Package/>
      <Team/>
      <Contact/> 
      <Rights/>
      </Suspense>
    </div>
  )
}

export default App