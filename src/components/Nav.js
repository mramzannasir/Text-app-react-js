import React from 'react'

export default function Nav(props) {
  return (
 <>
    <nav className={`p-2 bg-black flex justify-between text-slate-200`}>
        <div>
            <h1 className='text-2xl' >TextUtils</h1>
        </div>
        <div>
        <button className='outline-none border-none' onClick={props.toggleMode} >{props.mode==="white"?'Enabel-Dark Mode':'Enable-White Mode'}</button>
        </div>
    </nav>
 </>
  )
}
