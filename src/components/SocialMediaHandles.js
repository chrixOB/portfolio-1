import { FaceFrownIcon } from '@heroicons/react/24/outline'
import {FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter, FaYoutube} from 'react-icons/fa6'
import {} from 'react-icons/md'
import Link from 'next/link'
import React from 'react'


function SocialMediaHandles() {

  return (
    <div className='flex flex-wrap gap-1'>
        <SocialMediaIcon href={'https://wa.me/+233556273245'} iconName={<FaWhatsapp size={40} className='text-cyan-300 hover:bg-gray-900 p-2 hover:rounded-full hover:transition-all duration-500' />}/>
        <SocialMediaIcon href={'https://x.com/JamesTotimeh'} iconName={<FaXTwitter size={40} className='text-cyan-300 hover:bg-gray-900 p-2 hover:rounded-full hover:transition-all duration-500' />}/>
        <SocialMediaIcon href={'https://www.linkedin.com/in/james-tetteh-totimeh-bb3b20230'} iconName={<FaLinkedinIn size={40} className='text-cyan-300 hover:bg-gray-900 p-2 hover:rounded-full hover:transition-all duration-500' />}/>
        <SocialMediaIcon href={'https://www.facebook.com/totimeh.james.9'} iconName={<FaFacebook size={40} className='text-cyan-300 hover:bg-gray-900 p-2 hover:rounded-full hover:transition-all duration-500' />}/>
        <SocialMediaIcon href={'https://instagram.com/totimehjames'} iconName={<FaInstagram size={40} className='text-cyan-300 hover:bg-gray-900 p-2 hover:rounded-full hover:transition-all duration-500' />}/> 
        <SocialMediaIcon href={'mailto:totimehjames123@gmail.com'} iconName={<FaEnvelope size={40} className='text-cyan-300 hover:bg-gray-900 p-2 hover:rounded-full hover:transition-all duration-500' />}/> 
        <SocialMediaIcon href={'https://www.youtube.com/@jamestotimeh9497/'} iconName={<FaYoutube size={40} className='text-cyan-300 hover:bg-gray-900 p-2 hover:rounded-full hover:transition-all duration-500' />}/> 
        <SocialMediaIcon href={'https://github.com/totimehjames123'} iconName={<FaGithub size={40} className='text-cyan-300 hover:bg-gray-900 p-2 hover:rounded-full hover:transition-all duration-500' />}/> 
    </div> 
  )
}

export default SocialMediaHandles



function SocialMediaIcon({iconName, href}) {
  return (
    <Link target='_blank' href={href}>{iconName}</Link>
  )
}

