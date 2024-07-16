import React from 'react'
import './Header.css';

const Header = ({ data, setData }) => {



    return (
        <div className='h-4/5 flex justify-center items-center'>
            {
                data.length > 0 && data.map((item, index) => {
                    return (
                        <div className="w-2/5 flex justify-center items-center h-3/4 shadow-2xl bg-slate-500 text-gray-50 p-4 text-base" key={index}>
                            <div className="w-1/2 h-full p-1 flex justify-center items-center">
                                <div className="">
                                    <img src={item.avatar_url} alt="avatar img" className='h-56 rounded-full mx-auto' />
                                    <p className='h-12 text-xl bg-slate-700 p-2 rounded-lg flex justify-center items-center my-8'>Username: {item.login}</p>
                                </div>
                            </div>
                            <div className="w-1/2 h-full flex p-1 justify-center items-center flex-col">
                                <div className="h-12 text-xl bg-slate-700 p-2 my-3 rounded-lg flex justify-center items-center w-full">
                                    <h4>Name: {item.name}</h4>
                                </div>
                                <p className='h-12 text-xl bg-slate-700 p-2 my-3 rounded-lg flex justify-center items-center w-full'>Public Repos: {item.public_repos}</p>
                                <p className='h-12 text-xl bg-slate-700 p-2 my-3 rounded-lg flex justify-center items-center w-full'>Public Gists: {item.public_gists}</p>
                                <strong className='h-12 text-xl bg-slate-700 p-2 my-3 rounded-lg flex justify-center items-center w-full'>Profile Created: {item.created_at.slice(0, 10)}</strong>
                            </div>
                        </div>
                    )
                })
            }

            {
                data.length === 0 && <div className="h-4/5 flex justify-center items-center">
                    <h1 className='text-3xl'>No User</h1>
                </div>
            }
        </div>
    )
}

export default Header