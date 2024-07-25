import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import { ArrowPathIcon, ChartBarSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import ButtonOutlined from './ButtonOutlined'
import projectsData from './../utils/projectsData'

function LatestProjects() {

  const [seeMoreCounter, setSeeMoreCounter] = useState(6)

  return (
    <div className='min-h-screen' id='Projects'>
        <div className='text-center pt-3'>
            <SectionTitle firstText={'Latest'} secondText={'Projects'}/>
        </div>
        <div className='flex justify-center'>
            <div className='p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-10/12'>
              {projectsData?.map((project, index) => (
                index + 1 <= seeMoreCounter &&
                  <ProjectCard key={index} title={project?.title} description={project?.description} link={project?.link} type={project.type}/>
              ))
              }
            </div>
           
        </div>
        <div className='text-center'>
          { projectsData.length > seeMoreCounter && <ButtonOutlined title={'See More'} onPress={() => setSeeMoreCounter(c => c + 3)}/>}
        </div>
    </div>
  )
}

export default LatestProjects