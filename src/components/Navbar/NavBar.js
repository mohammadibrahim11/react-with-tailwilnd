import React from 'react';
import Link from '../link/Link'

const NavBar = () => {
    const links = [
        {id:1, path:'./#Home', name:'Home'},
        {id:2,path:'./#Blog',name:'Blog'},
        {id:3,path:'./#Contact',name:'Contact'},
        {id:4,path:'./#About',name:'About'}
    ]
    return (
        <div className=''>
            <ul className='lg:flex  justify-center content-center bg-cyan-800  w-full p-4 '>
              {
                 links.map((link)=> <Link key={link.id} link={link}></Link>)
              }
            </ul>
        </div>
    );
};

export default NavBar;