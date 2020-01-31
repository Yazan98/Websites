import React, { Component } from 'react';
import { Paper, Grid, Button } from '@material-ui/core';
import ExampleComponent from "react-rounded-image";
import '../App.css';

class ProjectsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "projectName": "Vortex",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Base Code To Build Better Android Applications With Reactive Operations, Mvvm, etc",
                    "Link": "https://github.com/Yazan98/Vortex",
                    "Color": "#f98909"
                },
                {
                    "projectName": "Vortex SpringBoot",
                    "category": "Spring Boot",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Ready Operations To Build Monoltic Applications (Server Side)",
                    "Link": "https://github.com/Yazan98/Vortex/tree/master/vortex-spring-boot",
                    "Color": "#f98909"
                },
                {
                    "projectName": "Destiny",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Android Application Built With Latest Technologies With Vortex Infastructure",
                    "Link": "https://github.com/Yazan98/Destiny",
                    "Color": "#f98909"
                },
                {
                    "projectName": "Destiny Api",
                    "category": "Spring Boot",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Backend Project With Common Techniques With Vortex Infastructure, MySql Database, Security",
                    "Link": "https://github.com/Yazan98/Destiny-Api",
                    "Color": "#f98909"
                },
                {
                    "projectName": "Mwarrid",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Merchants With Suppliers Managment",
                    "Link": "https://play.google.com/store/apps/details?id=com.noventapp.mwarrid",
                    "Color": "#f98909"
                },
                {
                    "projectName": "Diretto",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Java",
                    "Description": "Food Delivery (Client, Driver) Apps",
                    "Link": "https://play.google.com/store/apps/details?id=com.noventapp.direct.user",
                    "Color": "#e76f00"
                },
                {
                    "projectName": "Thentrom",
                    "category": "Plugin",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Intellij Custom Theme",
                    "Link": "https://github.com/Yazan98/Thentrom",
                    "Color": "#f98909"
                },
                {
                    "projectName": "Wintrop",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Weather App With Latest Technolgies, Vortex Infastructure, Realm Database",
                    "Link": "https://github.com/Yazan98/Wintrop",
                    "Color": "#f98909"
                },
                {
                    "projectName": "Groupy",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Graduation Project Powered By Firebase, Mvc",
                    "Link": "https://github.com/Yazan98/Groupy",
                    "Color": "#f98909"
                },
                {
                    "projectName": "Drasati",
                    "category": "Android",
                    "hasCode": false,
                    "Language": "Kotlin",
                    "Description": "Education Application Powered By Atto",
                    "Link": "https://github.com/Yazan98",
                    "Color": "#f98909"
                },
                {
                    "projectName": "Atto",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Base Code To Build Android Applications With Mvc View Handling",
                    "Link": "https://github.com/Yazan98/Atto",
                    "Color": "#f98909"
                },
                {
                    "projectName": "Ktor Sample",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Simple Ktor Application (Backend Side) With Mongo Database, Firebase",
                    "Link": "https://github.com/Yazan98/Ktor-Sample",
                    "Color": "#f98909" 
                }
            ]
        };
    }

    render() {
        return (
            <div className="Projects">
                <h3>My Projects</h3>
                <table>
                {this.state.data.map(d => 
                    <Paper className="ProjectItem">
                        <div className="Item">
                            <Grid container xs={15}>
                                <Grid item xs={8}>
                                    <a href={d.Link}>{d.projectName}</a>
                                </Grid>
                                <Grid item xs={8}>
                                    <p>{d.Description}</p>
                                </Grid>
                                <Grid container xs={12}>
                                    <Grid item xs={6}>
                                        <Grid container xs={10}>
                                            <Grid item xs={2}>
                                            <div className="ImageColor">
                                            <ExampleComponent
                                                id="ImageColor"
                                                roundedColor={d.Color}
                                                imageWidth="15"
                                                imageHeight="15"/>
                                            </div>
                                            </Grid>
                                            <Grid item xs={5}>
                                            {d.Language}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={this.onItemClicked}>View</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => this.onItemGithubView(d.Link)}>Github</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                )}
                </table>
            </div>
        );
    }

    onItemClicked() {
        
    }

    onItemGithubView(link:String) {
        window.open(link);
    }
}

export default ProjectsComponent;