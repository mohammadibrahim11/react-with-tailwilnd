import React from 'react';
import {useState} from 'react'
import Link from '../link/Link'
import {Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [toggle,setToggle] = useState(false);
    const links = [
        {id:1, path:'./#Home', name:'Home'},
        {id:2,path:'./#Blog',name:'Blog'},
        {id:3,path:'./#Contact',name:'Contact'},
        {id:4,path:'./#About',name:'About'}
    ]
    return (
        <div className='bg-cyan-800'>
            <div  onClick={()=> setToggle(!toggle)} className="h-6 w-6 text-blue-500 md:hidden">
              { 
              toggle ? <XMarkIcon/>:<Bars3Icon/>
               }
          </div>
         
            <ul className={`md:flex justify-center content-center bg-cyan-800  w-full p-4 absolute  md:static ${toggle ? 'top-6' : 'top-[-130px]'}`}>
              {
                 links.map((link)=> <Link key={link.id} link={link}></Link>)
              }
            </ul>
        </div>
    );
};

export default NavBar;