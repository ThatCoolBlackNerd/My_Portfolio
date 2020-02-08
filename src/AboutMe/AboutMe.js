import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import email from './Icons/email.png';
import github from './Icons/github.png';
import linkedin from './Icons/linkedin.png';
import twitter from './Icons/twitter.png';
import './AboutMe.css';
import './Tablet_Desktop_AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div className='container'>
                <h2 className='title aboutMe'>
                    Who Am I?
                </h2>
                <div className='bioText'>
                    <p className='pgraph'>I am a recent MBA Graduate and current Web Development student in the Bloc Web Developer Program. I am looking to combine my business and project
                    management skills with web development to work with a great team and help create web and mobile apps that makes life easier for people.
                    </p>
                     <p className='pgraph'> My ability to understand both the technical and business aspects gives me a unique perspective on creating the best end user experience.
                    </p>
                    <p className='pgraph'> Coding and business is what I do for work, but it's not all I do. I am also a podcast host, movie critic, comic book nerd, who played college football, 
                    loves basketball and enjoys dinner with my wife and days at the park with my dog.
                    </p>
                    <p className='contactMe'>Contact Me:</p><br /><br />
                        <div class="socialIcon">
                            <Link to='mailto:bmcarr21@me.com'>
                                <img src={email} class="img mail" /> 
                            </Link>
                            <Link to="https://www.linkedin.com/in/brandoncarr21/" target="_blank">
                                <img src={linkedin} class="img linked" />
                            </Link>
                            <Link to="https://github.com/ThatCoolBlackNerd" target="_blank">
                                <img src={github} class="img git" />
                            </Link>
                            <Link to="https://twitter.com/thatcoolblknerd" target="_blank">
                                <img src={twitter} class="img twitter" />
                            </Link>
                        </div>
                </div>
                <div class="buttonClass">
                <Link to="/"> 
                    <button class="button home">
                        Home
                    </button> 
                </Link> 
                <Link to="/Projects">
                    <button class="button projects">
                        Projects
                    </button>
                </Link>
                </div>
            </div>
        )
    }
}

export default AboutMe
