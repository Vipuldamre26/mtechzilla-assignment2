
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [ data, setData ] = useState([]);

  return (
    <div className='h-screen w-screen bg-slate-300'>
      <Navbar data={data} setData={setData} />
      <Header data={data} setData={setData} />
    </div>
  )
}

export default App
