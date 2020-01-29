import React, { Component } from 'react';
import '../styles/PointsStyle.css';
import Grid from '@material-ui/core/Grid';
import AndroidLogo from '../images/android.png';
import BackendLogo from '../images/backend.png';
import OpenSourceLogo from '../images/open_source.png';
import MaintanceLogo from '../images/maintance.png';
import UpLogo from '../images/up.png';
import DevLogo from '../images/dev.png';

class PointsDescriptionComponent extends Component {

    render() {
        return (
            <div className="PointsComponent">
                <h3 className="BigText">Features</h3>
                            <br></br>
                <Grid item xs={12} container justify="center">
                    <Grid item xs={3}>
                        <div className="Item">
                            <img src={AndroidLogo} className="Logo" />
                            <br></br>
                            <h4 className="Title">Android Applications</h4>
                            <br></br>
                            <h6 className="Description">Generate Android Applications With Full Operations, UseCases, Common Technologies at Kotlin Language</h6>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Item">
                            <img src={BackendLogo} className="Logo" />
                            <br></br>
                            <h4 className="Title">Backend Applications</h4>
                            <br></br>
                            <h6 className="Description">Build Backend Applications With Specific Structure At SpringBoot , Ktor Frameworks</h6>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Item">
                            <img src={OpenSourceLogo} className="Logo" />
                            <br></br>
                            <h4 className="Title">Open Source Plan</h4>
                            <br></br>
                            <h6 className="Description">Vortex Love Open Source and always up to date with common UseCases</h6>
                        </div>
                    </Grid>
                    <Grid item xs={12} container justify="center">
                    <Grid item xs={3}>
                        <div className="Item">
                            <img src={MaintanceLogo} className="Logo" />
                            <br></br>
                            <h4 className="Title">Code Changes</h4>
                            <br></br>
                            <h6 className="Description">Vortex Designed To Easy Maintane , Change Code With Awesome Handling at Application Flow</h6>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Item">
                            <img src={UpLogo} className="Logo" />
                            <br></br>
                            <h4 className="Title">Better Code</h4>
                            <br></br>
                            <h6 className="Description">Build Better , Clean Code (No Spagety Code Anymore)</h6>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Item">
                            <img src={DevLogo} className="Logo" />
                            <br></br>
                            <h4 className="Title">Development Plan</h4>
                            <br></br>
                            <h6 className="Description">Finish The Objective Faster With Vortex Development</h6>
                        </div>
                    </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default PointsDescriptionComponent;