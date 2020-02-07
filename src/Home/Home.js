import React, { Component } from 'react';
import Link from 'react-router-dom';
import './Home.css';
import './Tablet_Desktop_Home.css';

class Home extends Component {
    render() {
        return (
            <div className='container'>
               <h1 className="title">Hello!!</h1>
               <h2 className="headline">I'm Brandon. I am a Fullstack Developer & Project Manager</h2>
                    <div className="buttonClass">
                        <Link to='/AboutMe'>
                            <button className="button">
                            About Me
                            </button>
                        </Link>
                        <Link to='/Projects'>
                            <button className="button">
                                Projects
                            </button>
                        </Link> 
                    </div>
            </div>
        )
    }
}

export default Home
