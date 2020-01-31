import React, { Component } from 'react';
import { Paper, Grid, Button } from '@material-ui/core';

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
                    "Link": "https://github.com/Yazan98/Vortex"
                },
                {
                    "projectName": "Vortex SpringBoot",
                    "category": "Spring Boot",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Ready Operations To Build Monoltic Applications (Server Side)",
                    "Link": "https://github.com/Yazan98/Vortex/tree/master/vortex-spring-boot"
                },
                {
                    "projectName": "Destiny",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Android Application Built With Latest Technologies With Vortex Infastructure",
                    "Link": "https://github.com/Yazan98/Destiny"
                },
                {
                    "projectName": "Destiny Api",
                    "category": "Spring Boot",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Backend Project With Common Techniques With Vortex Infastructure, MySql Database, Security",
                    "Link": "https://github.com/Yazan98/Destiny-Api"
                },
                {
                    "projectName": "Mwarrid",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Merchants With Suppliers Managment",
                    "Link": "https://play.google.com/store/apps/details?id=com.noventapp.mwarrid"
                },
                {
                    "projectName": "Diretto",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Food Delivery (Client, Driver) Apps",
                    "Link": "https://play.google.com/store/apps/details?id=com.noventapp.direct.user"
                },
                {
                    "projectName": "Thentrom",
                    "category": "Plugin",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Intellij Custom Theme",
                    "Link": "https://github.com/Yazan98/Thentrom"
                },
                {
                    "projectName": "Wintrop",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Weather App With Latest Technolgies, Vortex Infastructure, Realm Database",
                    "Link": "https://github.com/Yazan98/Wintrop"
                },
                {
                    "projectName": "Groupy",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Graduation Project Powered By Firebase, Mvc",
                    "Link": "https://github.com/Yazan98/Groupy"
                },
                {
                    "projectName": "Drasati",
                    "category": "Android",
                    "hasCode": false,
                    "Language": "Kotlin",
                    "Description": "Education Application Powered By Atto",
                    "Link": "https://github.com/Yazan98"
                },
                {
                    "projectName": "Atto",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Base Code To Build Android Applications With Mvc View Handling",
                    "Link": "https://github.com/Yazan98/Atto"
                },
                {
                    "projectName": "Ktor Sample",
                    "category": "Android",
                    "hasCode": true,
                    "Language": "Kotlin",
                    "Description": "Simple Ktor Application (Backend Side) With Mongo Database, Firebase",
                    "Link": "https://github.com/Yazan98/Ktor-Sample"
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
                                        {d.Language}
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button>View</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button>Github</Button>
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
}

export default ProjectsComponent;