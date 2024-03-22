import React from 'react'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import { ArrowPathIcon, ChartBarSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

function LatestProjects() {
  return (
    <div className='min-h-screen' id='Projects'>
        <div className='text-center py-4'>
            <SectionTitle firstText={'Latest'} secondText={'Projects'}/>
        </div>
        <div className='flex justify-center'>
            <div className='p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-10/12'>
                <ProjectCard  title={'Software Development'} description={'We develop highly secured and reliable mobile apps, desktop apps and web apps for.'} />
                <ProjectCard  title={'Robotic Process Automation'} description={'We build highly dependable bots to help automate repetitive tasks in organizat'} />
                <ProjectCard  title={'Software Development'} description={'We develop highly secured and reliable mobile apps, desktop apps and web apps for.'} />
                <ProjectCard  title={'Robotic Process Automation'} description={'We build highly dependable bots to help automate repetitive tasks in organizat'} />
                <ProjectCard  title={'Software Development'} description={'We develop highly secured and reliable mobile apps, desktop apps and web apps for.'} />
                <ProjectCard  title={'Robotic Process Automation'} description={'We build highly dependable bots to help automate repetitive tasks in organizat'} />
            </div>
        </div>
        

    </div>
  )
}

export default LatestProjects