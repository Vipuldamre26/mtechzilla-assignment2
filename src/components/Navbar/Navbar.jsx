import React, { useState } from 'react'
import axios from 'axios';
'./Navbar.css';

const Navbar = ({ data, setData }) => {

    const [ query, setQuery ] = useState('');
    // console.log(query);
    
    
    const fetchData = async (e) => {
        if(query){
            const apiURL = `https://api.github.com/users/${query}`;
            try{
                const res = await axios.get(apiURL);
                setData([res.data]);
                setQuery('');
            }
            catch(error){
                console.log(error);
            }
        }
    }

    const handleSubmit = () => {
        fetchData()
    }

  return (
    <div className='flex items-center justify-between px-12 h-20 bg-slate-500'>
        <div className="logo">
            <h3 className='text-gray-50 text-xl'>GitHub User Details</h3>
        </div>
        <div className="mx-12" >
            <input placeholder='Search User' value={query} onChange={(e) => setQuery(e.target.value)} type="text" className='w-96 h-10 rounded-lg border-2 px-2' />
            <button onClick={handleSubmit} className='w-32 bg-slate-800 text-gray-50 h-10 rounded-lg mx-4'>Search</button>
        </div>
    </div>
  )
}

export default Navbar