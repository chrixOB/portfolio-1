import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import Logo from './Logo';

const NavBar = () => {

    const router = useRouter();
  
    const navLinks = [
        {
            name: 'Home',
            link: '',
        },
        {
            name: 'About',
            link: '',
        },
        {
            name: 'Services',
            link: '',
        },
        {
            name: 'Projects',
            link: '',
        },
        {
            name: 'Contacts',
            link: '',
        }
    ]

  return (
    <div className={'flex justify-between p-5 overflow-hidden'}>
        <div>
          <Logo />
        </div>
        <ul className="flex">
         {navLinks.map((navLink, index) => 
                
            <li key={index} className="mr-5"><Link href={`#${navLink.name}`} className={`${router.pathname.includes(navLink.name) == true ? 'text-blue-200' : 'text-white'}`}>{navLink.name}</Link></li>
        )}
        </ul>
    </div>
  )
}

export default NavBar
