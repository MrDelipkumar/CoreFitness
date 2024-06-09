import React, { Suspense } from 'react'
import { SiOpenaigym } from "react-icons/si";
const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Package = React.lazy(() => import("./Pages/Package/Package"));
const Team = React.lazy(() => import("./Pages/Team/Team"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact"));
const Rights = React.lazy(() => import("./Components/Rights/Rights"));
import { SpeedInsights } from '@vercel/speed-insights/react';
function App() {
  return (
    <div>
      <Suspense fallback={
        <div className='w-full h-screen flex flex-col justify-center items-center gap-1'>
          <div className='text-orange-500 animate-spin'><SiOpenaigym size={20}/></div>
          <h1 className=' font-semibold'>Loading...</h1>
      </div>}>
      <Home/>
      <About/>
      <Package/>
      <Team/>
      <Contact/> 
      <Rights/>
      <SpeedInsights />
      </Suspense>
    </div>
  )
}

export default App