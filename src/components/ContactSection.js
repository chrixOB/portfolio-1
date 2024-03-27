import React from 'react'
import SectionTitle from './SectionTitle'
import Logo from './Logo'
import FormInputField from './FormInputField'
import ButtonBackground from './ButtonBackground'
import Link from 'next/link'
import SocialMediaHandles, { SocialMediaIcon } from './SocialMediaHandles'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'

function ContactSection() {

  return (
    <div className='min-h-screen' id='Contacts'>
        <div className='text-center pt-7'>
            <SectionTitle firstText={'Contact'} secondText={'Me'}/>
        </div>
        <>
            <div className='flex min-h-[80vh] justify-center items-start lg:items-center'>
                <div className='p-3 grid sm:grid-cols-1 lg:grid-cols-2 gap-7 w-full lg:w-10/12'>
                    <div className='px-4'>
                        <div >
                            <Logo />
                            <p className=''>
                                Feel free to reach out to me on any of my social media handles provided.
                            </p>
                        </div>

                        {/* Social Media */}
                        <div className='my-3'>
                            <h1 className='text-lg font-bold'>Social Media</h1>
                            <div className=''>
                                <SocialMediaHandles />
                            </div>
                        </div>

                        {/* Mobile Number */}
                        <div className='my-3'>
                            <h1 className='text-lg font-bold'> Mobile Number</h1>
                            <div className='flex items-center'>
                                <SocialMediaIcon href={'tel: +233556273245'} iconName={<FaPhone />}/>
                                <Link target='_blank' href={'tel: +233556273245'}> (GHA) +233556273245</Link>
                            </div>
                        </div>

                        {/* Email */}
                        <div className='my-3'>
                            <h1 className='text-lg font-bold'>Email</h1>
                            <div className='flex items-center'>
                                <SocialMediaIcon href={"mailto: totimehjames123@gmail.com"} iconName={<FaEnvelope />}/>
                                <Link target='_blank' href={"mailto: totimehjames123@gmail.com"}>totimehjames123@gmail.com</Link>
                            </div>
                        </div>

                        
                        {/* Address */}
                        <div className='my-3'>
                        <h1 className='text-lg font-bold'>Address</h1>
                        <div className='flex items-center'>
                                <SocialMediaIcon href={"https://www.google.com/maps/place/Ngleshi+Amanfro/@5.5385646,-0.4015882,14z/data=!3m1!4b1!4m6!3m5!1s0xfdfbb3d920c2ae5:0x9801e229a911a596!8m2!3d5.5353486!4d-0.3983829!16s%2Fg%2F11bwf3dz4s?entry=ttu"} iconName={<FaLocationDot />}/>
                                <Link target='_blank' href={"https://www.google.com/maps/place/Ngleshi+Amanfro/@5.5385646,-0.4015882,14z/data=!3m1!4b1!4m6!3m5!1s0xfdfbb3d920c2ae5:0x9801e229a911a596!8m2!3d5.5353486!4d-0.3983829!16s%2Fg%2F11bwf3dz4s?entry=ttu"}>
                                    <p>Kasoa Kalabuley adjacent The Methodist Church, Mataheko - Accra, Ghana</p>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Form */}
                    <div className=''>
                        <h1 className='text-[20px] font-bold px-3 text-center'>Get in Touch</h1>
                        <form action=''>
                            <div className=''>
                                <div className="p-3 grid sm:grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                                    <FormInputField dataType={'text'} placeholder={'First Name'} required/>
                                    <FormInputField dataType={'text'} placeholder={'Last Name'} required/>
                                    <FormInputField dataType={'email'} placeholder={'Email'} required/>
                                    <FormInputField dataType={'tel'} placeholder={'Phone'} required/>
                                    
                                </div>
                                <div className='p-3'>
                                    <textarea rows={6} className='bg-gray-800 text-white max-h-[35vh] min-h-[30vh] rounded-md p-3 w-full focus:outline-none shadow-sm shadow-cyan-600' placeholder='Add a message...' required></textarea>
                                </div>
                                <div className='p-3 text-center'>
                                    <ButtonBackground title={'Send Message'} onPress={() => {alert('Message Sent')}}/>
                                </div>
                                
                            </div>
                        </form>
                    </div>

                    {/*  Form ends here */}
                </div>
            </div>
        </>
        {/* Trademark Information */}
        <div className='text-center py-5'>
            <p className='text-white text-sm'><span className='text-[25px]'>&reg;</span> {new Date().getFullYear()} James Tetteh Totimeh. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default ContactSection