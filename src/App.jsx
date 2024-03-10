import { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import Service from './components/Service';
import Works from './components/Works';


function App() {
  const [theme, setTheme] = useState(null)
  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  },[]);


  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
      
    }else{
      document.documentElement.classList.remove('dark');

    }
  },[theme]);


  const handleThemeSwitch = ()=>{
      setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
    <div className='font-inter bg:white dark:bg-slate-900'>
      <button type='button'
        onClick={handleThemeSwitch}
        className='fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md'
      >
          {theme === 'dark' ? '🌚' : '🌞'}
      </button>
      {/* <div className='bg:white dark:bg-slate-900'></div> */}
      <div className='max-w-5xl mx-auto w-11/12'>
          <HeroSection />
          <Service />
          <Works></Works>
      </div>
      </div>
    </>
  )
}

export default App
