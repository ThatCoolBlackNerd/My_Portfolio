import React, { Component } from 'react';
import './Tablet_Desktop_Projects.css';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div>
                <h3 className='projectTitle'>{this.props.title}</h3>
                    <div className='projectScreenshot'>
                        <img 
                        src={this.props.screenshot} 
                        alt={this.props.alt} 
                        className='Img' 
                        />
                    </div>
                    <span className='link'>
                        <a href={this.props.code} target="_blank" rel="noopener noreferrer">
                            View Code |
                        </a>
                        <a href={this.props.page} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </span>
                    <p className="skills">
                        `Technologies used - {this.props.skills}`
                    </p>
                    <h5>Project Description</h5>
                    <p className="description">
                        {this.props.description}
                    </p>
            </div>
        )
    }
}

export default Projects
