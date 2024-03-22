import React from 'react'
import SectionTitle from './SectionTitle'
import ServiceCard from './ServiceCard'
import { ArrowPathIcon, ChartBarSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

function OurSevicesSection() {
  return (
    <div className='min-h-screen' id='Services'>
        <div className='text-center py-5'>
            <SectionTitle firstText={'My'} secondText={'Services'}/>
        </div>
        <div className='flex justify-center'>
            <div className='p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-10/12'>
                <ServiceCard iconName={<CodeBracketIcon />} title={'Software Development'} description={'I develop highly secured and reliable mobile apps, desktop apps and web apps for individuals and organizations which has the ability to solve real life problems in organizaitions.'} />
                <ServiceCard iconName={<ArrowPathIcon />} title={'Robotic Process Automation'} description={'I build highly dependable bots to help automate repetitive tasks in organizations like data entry, sending of emails in their bulks sizes, data scraping and other routine tasks.'} />
                <ServiceCard iconName={<ChartBarSquareIcon />} title={'AI & Machine Learning'} description={'I develop AI solutions leveraging machine learning, computer vision, and data analytics for diverse business applications to aid in optimizing efficiency and decision-making.'} />
            </div>
        </div>
        

    </div>
  )
}

export default OurSevicesSection