import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfileComponent from './ProfileComponent';
import ProjectsComponent from './ProjectsComponent';

class MainPageComponent extends Component {

    render() {
        return (
            <div className="MainPage">
                <Grid container xs={6}>
                    <Grid item xs={2}>
                    <ProfileComponent />
                    </Grid>
                    <Grid item xs={4}>
                        <ProjectsComponent />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default MainPageComponent;