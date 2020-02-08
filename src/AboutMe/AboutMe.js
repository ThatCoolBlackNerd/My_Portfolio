import React, { Component } from 'react';
import Link from 'react-router-dom';
import email from './Icons/email.png';
import github from './Icons/github.png';
import linkedin from './Icons/linkedin.png';
import twitter from './Icons/twitter.png';

class AboutMe extends Component {
    render() {
        return (
            <div className='container'>
                <h2 className='title aboutMe'>
                    Who Am I?
                </h2>
                <div className='bioText'>
                    <p>I am a recent MBA Graduate and current Web Development student in the Bloc Web Developer Program. I am looking to combine my business and project
                    management skills with web development to work with a great team and help create web and mobile apps that makes life easier for people.
                    </p>
                     <p> My ability to understand both the technical and business aspects gives me a unique perspective on creating the best end user experience.
                    </p>
                    <p> Coding and business is what I do for work, but it's not all I do. I am also a podcast host, movie critic, comic book nerd, who played college football, 
                    loves basketball and enjoys dinner with my wife and days at the park with my dog.
                    </p>
                    
                </div>
            </div>
        )
    }
}

export default AboutMe
