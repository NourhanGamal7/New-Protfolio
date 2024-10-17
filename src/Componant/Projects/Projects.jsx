import React from 'react'
import Title from '../Layouts/Title'
import projectOne from '../../assets/images/projectOne.png'
import projectTwo from '../../assets/images/projectTwo.png'
import projectThree from '../../assets/images/projectThree.png'
import projectFour from '../../assets/images/projectFour.png'
import projectFive from '../../assets/images/projectFive.png'
import projectsix from '../../assets/images/projectsix.jpg'
import projectsevin from '../../assets/images/projectSevin.jpg'
import project8 from '../../assets/images/projec8.jpg'
import projectNine from '../../assets/images/projectnine.jpg'
import ProjectsCard from './ProjectsCard';
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <a href="https://ecommerce-app-ruby-six.vercel.app/" target='blank'>
        <ProjectsCard
          title="E-commerce-app"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={project8}
        />
        </a>
      <a href="https://car-rental-red.vercel.app/home" target='blank'>
        <ProjectsCard
          title="car-rental-red"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectsevin}
        />
      </a>
      <a href="https://facebook-social-web.vercel.app/" target='blank'>
        <ProjectsCard
          title="facebook-social-website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectsix}
        />
      </a>
      <a href="https://restaurant-plum-zeta.vercel.app/" target='blank'>
          <ProjectsCard
          title="restaurant"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        </a>  
      <a href="https://education-website-azure.vercel.app/" target='blank'>
        <ProjectsCard
          title="education-website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        </a>
        
        <a href="https://bonik-ecommerice-website.vercel.app/" target='blank'>
        <ProjectsCard   
          title="bonik-ecommerice-website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFour}   
        />
        </a>
        <a href="https://my-portfolio-rho-sandy.vercel.app/" target='blank'>
        <ProjectsCard   
          title="portfolio"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}   
        />
        </a>
       <a href="https://todo-app-list-cdo9.vercel.app/" target='blank'>
        <ProjectsCard
          title="todo-app-list"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFive}
        />
        </a>
        <a href="https://ecommerce-website-one-nu.vercel.app/" target='blank'>
          <ProjectsCard
          title="E-commerce-Website-Food"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectNine}
        />
        </a>
        
      </div>
    </section>
  );
}

export default Projects




// https://restaurant-plum-zeta.vercel.app/
// https://todo-app-list-cdo9.vercel.app/