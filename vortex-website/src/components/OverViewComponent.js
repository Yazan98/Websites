import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';

class OverViewComponent extends Component {
    render() {
        return (
            <div className="OverViewComponent">
                <div className="MainContainer">
                    <div className="MainComponents">
                    <Grid spacing={24} className="GridContainer">
                        <Grid className="Text">
                            <h1>Vortex-io</h1>
                            <br></br>
                            <h6 className="Des">Build Better Applications With Specific Structure To Implement 
                            the Common Cases At any Application With Generators To Generate Flows At Any Application</h6>
                        </Grid>
                        <Grid>
                        <a href="https://github.com/Vortex-io" class="myButton" target="_blank">GITHUB</a>
                        </Grid>
                    </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default OverViewComponent;
