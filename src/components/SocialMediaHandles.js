import { FaceFrownIcon } from '@heroicons/react/24/outline'
import {FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter, FaYoutube} from 'react-icons/fa6'
import {} from 'react-icons/md'
import Link from 'next/link'
import React from 'react'


function SocialMediaHandles() {

  return (
    <div className='flex flex-wrap gap-1'>
        <SocialMediaIcon href={'https://wa.link/1wlp87'} iconName={<FaWhatsapp size={20}  />}/>
        <SocialMediaIcon href={'https://x.com/chrix_ob'} iconName={<FaXTwitter size={20}  />}/>
        <SocialMediaIcon href={'https://www.linkedin.com/in/christian-anang-623b97217'} iconName={<FaLinkedinIn size={20}  />}/>
        {/* <SocialMediaIcon href={'https://www.facebook.com/totimeh.james.9'} iconName={<FaFacebook size={20}  />}/> */}
        <SocialMediaIcon href={'https://www.instagram.com/robin_hoods_grandfather/'} iconName={<FaInstagram size={20}  />}/> 
        <SocialMediaIcon href={'mailto:chrisobodai40@gmail.com'} iconName={<FaEnvelope size={20}  />}/> 
        <SocialMediaIcon href={'https://www.youtube.com/@jamestotimeh9497/'} iconName={<FaYoutube size={20}  />}/> 
        <SocialMediaIcon href={'https://github.com/chrixob'} iconName={<FaGithub size={20}  />}/> 
    </div> 
  )
}

export default SocialMediaHandles



export function SocialMediaIcon({iconName, href}) {
  return (
    <Link target='_blank' className='text-cyan-300 hover:bg-gray-900 p-2 hover:rounded-full hover:transition-all duration-500' href={href}>{iconName}</Link>
  )
}

