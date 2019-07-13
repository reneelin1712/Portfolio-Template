import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import { ReactComponent as Git } from '../../src/img/github.svg';
import { ReactComponent as Linkedin } from '../../src/img/linkedin.svg';
import { ReactComponent as Logo } from '../../src/img/web-programming.svg';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="header-home" style={{ width: '100%', height: '100%', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <div className="title">
                            <Link to="/project">
                                <Logo height='12em' width='12em' /></Link>
                            <h1 className="name">Renee Lin</h1>
                            
                            <hr></hr>
                            <p>Full Stack Web Developer</p>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | mySql</p>
                        </div>

                        <div className="links">
                            <a href="http:google.com" rel="noopener noreferrer" target="_blank"><Git height='3em' width='3em' /></a>
                            <a href="http:google.com" rel="noopener noreferrer" target="_blank"><Linkedin height='3em' width='3em' /></a>
                        </div>

                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Home;