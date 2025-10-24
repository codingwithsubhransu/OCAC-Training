import React from 'react';
import Project from '../../Global_Info'

const Projects = () => {
    return (
        <div className='flex flex-col gap-5 items-center justify-center' id='projects'>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h1 className='w-full text-white text-4xl text-center lg:text-5xl'>Projects</h1>
                <span className='h-14 w-[3px] bg-orange-600 lg:h-16'></span>
                <span className='h-2 w-2 bg-orange-600 rounded-full'></span>
            </div>

            <div className='flex flex-col text-white gap-10 lg:gap-20'>

                    {Project.projects.map((proj, i) => {
                        return (
                            <div key={i} className='flex flex-col gap-4 pl-5 md:flex-row lg:gap-20'>
                                <div className='flex flex-col gap-6 md:min-w-1/2'>
                                    <h1 className='text-2xl lg:text-4xl'>{proj.title}</h1>
                                    <div className='overflow-hidden flex gap-3 text-sm pl-2'>
                                        {proj.tech_used.map((tech, index) => {
                                            return (
                                                <span className='pl-2 pr-2 pt-1 pb-1 bg-[#10107b] rounded-sm lg:text-xl' key={index}>{tech}</span>
                                            )
                                        })}
                                    </div>
                                    <p className='lg:text-xl'>{proj.description}</p>
                                    <div className='flex gap-4'>
                                        <a href={proj.github_link} className='text-white bg-orange-600 pt-2 pb-2 pl-4 pr-4 lg:text-xl'>Github Repo</a>
                                        <a href={proj.project_link} className='text-orange-600 pt-2 pb-2 pl-4 pr-4 underline lg:text-xl'>Show Project <span className='text-white'>↗</span></a>
                                    </div>
                                    </div>
                                
                                <img src={proj.image} alt="Project image" className='w-full h-44 bg-cover'/>
                            </div>
                            
                            
                        )
                    })}

                </div>

            </div>
    );
}

export default Projects;
