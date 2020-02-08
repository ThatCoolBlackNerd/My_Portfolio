import React, { Component } from 'react';
import Link from 'react-router-dom';
import './Tablet_Desktop_Projects.css';

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
                        <Link to={this.props.code}>
                            View Code |
                        </Link>
                        <Link to={this.props.page}>
                            View Project
                        </Link>
                    </span>
                    <p className="skills">
                        `Technologies used - ${this.props.skills}`
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
