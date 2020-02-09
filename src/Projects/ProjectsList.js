import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from './ProjectObject';
import Projects from './Projects';
import './Tablet_Desktop_Projects.css';

class ProjectsList extends Component {
    
    render() {
        return (
            <div className="container">
            <h2 className='title myProjects'>Projects</h2>
                {Page.map((project,idx) =>
                    <div key={idx}>
                        <Projects
                            title={project.title}
                            screenshot={project.screenshot}
                            alt={project.alt}
                            code={project.code}
                            page={project.page}
                            skills={project.skills}
                            description={project.description}
                        />
                    </div>)}
                    <div className="buttonClass">
                        <Link to='/' className='button'>
                                Home
                        </Link>
                        <Link to='/AboutMe' className='button'>
                                About Me
                        </Link>
                    </div>
            </div>
        )
    }
}

export default ProjectsList
