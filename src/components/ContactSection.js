import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import SectionTitle from './SectionTitle'
import Logo from './Logo'
import FormInputField from './FormInputField'
import ButtonBackground from './ButtonBackground'
import Link from 'next/link'
import SocialMediaHandles, { SocialMediaIcon } from './SocialMediaHandles'
import { FaEnvelope, FaLocationDot, FaPhone, FaSpinner } from 'react-icons/fa6'

function ContactSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState('')
    const [messageError, setMessageError] = useState('')



  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    setMessageError('')
    setMessageSuccess('')
    setIsLoading(true)
    e.preventDefault()

    emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            to_name: 'James Tetteh Totimeh',
            phone: formData.phone,
            message: formData.message,
        },
        process.env.NEXT_PUBLIC_USER_ID
      ).then((result) => {
        if (result.status == 200){
            setIsLoading(false)
            setMessageSuccess('Message Sent successfully!')
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
              })
        }
        else {
            setMessageError('Failed to send message. Please try again!!!')
            setIsLoading(false)
        }
      
    }, (error) => {
        setMessageError('An error occured while trying to send this message.')
        setIsLoading(false)

      console.error(error.text)

    })
  }

  return (
    <div className='min-h-screen' id='Contacts'>
    
      <div className='text-center pt-7'>
        <SectionTitle firstText={'Contact'} secondText={'Me'} />
      </div>
      <>
        <div className='flex min-h-[80vh] justify-center items-start lg:items-center'>
          <div className='p-3 grid sm:grid-cols-1 lg:grid-cols-2 gap-7 w-full lg:w-10/12'>
            <div className='px-4'>
              <div>
                <Logo />
                <p>
                  Feel free to reach out to me on any of my social media handles provided.
                </p>
              </div>

              {/* Social Media */}
              <div className='my-3'>
                <h1 className='text-lg font-bold'>Social Media</h1>
                <div>
                  <SocialMediaHandles />
                </div>
              </div>

              {/* Mobile Number */}
              <div className='my-3'>
                <h1 className='text-lg font-bold'> Mobile Number</h1>
                <div className='flex items-center'>
                  <SocialMediaIcon href={'tel: +233556273245'} iconName={<FaPhone />} />
                  <Link target='_blank' href={'tel: +233556273245'}> (GHA) +233556273245</Link>
                </div>
              </div>

              {/* Email */}
              <div className='my-3'>
                <h1 className='text-lg font-bold'>Email</h1>
                <div className='flex items-center'>
                  <SocialMediaIcon href={"mailto: totimehjames123@gmail.com"} iconName={<FaEnvelope />} />
                  <Link target='_blank' href={"mailto: totimehjames123@gmail.com"}>totimehjames123@gmail.com</Link>
                </div>
              </div>

              {/* Address */}
              <div className='my-3'>
                <h1 className='text-lg font-bold'>Address</h1>
                <div className='flex items-center'>
                  <SocialMediaIcon href={"https://www.google.com/maps/place/Ngleshi+Amanfro/@5.5385646,-0.4015882,14z/data=!3m1!4b1!4m6!3m5!1s0xfdfbb3d920c2ae5:0x9801e229a911a596!8m2!3d5.5353486!4d-0.3983829!16s%2Fg%2F11bwf3dz4s?entry=ttu"} iconName={<FaLocationDot />} />
                  <Link target='_blank' href={"https://www.google.com/maps/place/Ngleshi+Amanfro/@5.5385646,-0.4015882,14z/data=!3m1!4b1!4m6!3m5!1s0xfdfbb3d920c2ae5:0x9801e229a911a596!8m2!3d5.5353486!4d-0.3983829!16s%2Fg%2F11bwf3dz4s?entry=ttu"}>
                    <p>Kasoa Kalabuley adjacent The Methodist Church, Mataheko - Accra, Ghana</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h1 className='text-[20px] font-bold px-3 text-center'>Get in Touch</h1>

              <form onSubmit={handleSubmit}>
                <div>
                  <div className="p-3 grid sm:grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                    <FormInputField
                      dataType={'text'}
                      name={'firstName'}
                      placeholder={'First Name'}
                      onChange={handleChange}
                      value={formData.firstName}
                      required
                    />
                    <FormInputField
                      dataType={'text'}
                      name={'lastName'}
                      placeholder={'Last Name'}
                      onChange={handleChange}
                      value={formData.lastName}
                      required
                    />
                    <FormInputField
                      dataType={'email'}
                      name={'email'}
                      placeholder={'Email'}
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                    <FormInputField
                      dataType={'tel'}
                      name={'phone'}
                      placeholder={'Phone'}
                      onChange={handleChange}
                      value={formData.phone}
                      required
                    />
                  </div>
                  <div className='p-3'>
                    <textarea
                      rows={6}
                      className='bg-gray-800 text-white max-h-[35vh] min-h-[30vh] rounded-md p-3 w-full focus:outline-none shadow-sm shadow-cyan-600'
                      placeholder='Add a message...'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {messageSuccess.length > 0 ? <p className='text-sm font-bold px-3 text-center text-green-500'>{messageSuccess}</p>:
                  <p className='text-sm font-bold px-3 text-center  text-red-500'>{messageError}</p>}

                  <div className='p-3 text-center'>
                    <ButtonBackground title={isLoading ? <div className='flex items-center gap-4'><span className='animate-spin'><FaSpinner /></span>Sending ...</div>: 'Send Message'} onPress={handleSubmit} />
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
