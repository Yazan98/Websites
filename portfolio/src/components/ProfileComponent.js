import React, { Component } from 'react';
import ExampleComponent from "react-rounded-image";
import Image from '../images/image.jpeg';
import GithubImage from '../images/github.png';
import MailLogo from '../images/mail.png';
import LocationLogo from '../images/location.png';
import LinkedInLogo from '../images/linkedin.png';
import '../App.css';
import { Grid, Paper, Button, Link } from '@material-ui/core';


class ProfileComponent extends Component {

    render() {
        return (
            <div className="Profile">
               <Paper>
                   <Grid conatiner xs={12} className="ItemContainer">
                    <Grid item xs={12}>
                        <ExampleComponent
                            className="ProfileImage"
                            image={Image}
                            roundedColor="#66A5CC"
                            imageWidth="120"
                            imageHeight="120"
                            roundedSize="8"/>
                    </Grid>
                    <Grid item xs={12}>
                        <h1>Yazan Tarifi</h1>
                    </Grid>
                    <Grid item xs={12}>
                    <p>Code Relation (One To Many) one person with Many Frameworks, Platforms :D always trying to build Tools (Android, SpringBoot, Ktor, ReactJs)</p>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item xs={1}>
                            <img src={GithubImage} height="20" width="20"/>
                        </Grid>
                        <Grid item xs={11}>
                            <a href="https://github.com/Yazan98">@Yazan98</a>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className="Com">
                        <Grid item xs={1}>
                            <img src={MailLogo} height="20" width="20"/>
                        </Grid>
                        <Grid item xs={11}>
                        <a href="mailto:yazantarifi1@hotmail.com">yazantarifi1@hotmail.com</a>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className="Com">
                        <Grid item xs={1}>
                            <img src={LocationLogo} height="20" width="20"/>
                        </Grid>
                        <Grid item xs={11}>
                            <p>localhost</p>
                        </Grid>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item xs={1}>
                            <img src={LinkedInLogo} height="20" width="20"/>
                        </Grid>
                        <Grid item xs={11}>
                            <Button><a href="https://www.linkedin.com/in/yazan-tarifi-106282192/">Linkedin Profile</a></Button>
                        </Grid>
                    </Grid>
                   </Grid>
                   <div className="Test"></div>
               </Paper>
                
            </div>
        );
    }
}

export default ProfileComponent;