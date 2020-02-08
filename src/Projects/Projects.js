import React, { Component } from 'react';
import './Tablet_Desktop_Projects.css';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='projectTitle'>{this.props.title}</h3>
                    <div className='projectScreenshot'>
                        <img 
                        src={this.props.screenshot} 
                        alt={this.props.alt} 
                        className='Img' 
                        />
                    </div>
                    <div className='links'>
                    <span className='link'>
                        <a href={this.props.code} target="_blank" rel="noopener noreferrer">
                            View Code {' '} |
                        </a>
                        <a href={this.props.page} target="_blank" rel="noopener noreferrer">
                        {' '} View Project
                        </a>
                    </span>
                    </div>
                    <p className="skills">
                        Technologies used - {this.props.skills}
                    </p>
                    <p className="description">
                        {this.props.description}
                    </p>
            </div>
        )
    }
}

export default Projects
