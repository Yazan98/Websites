import React, { Component } from 'react';
import '../styles/ComponentsStyle.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class VortexComponents extends Component {

    render() {
        return (
            <div className="VortexComponents">
                <h3 className="MainStyle">Vortex Support</h3>
                <div className="Platforms">
                    <Grid container item xs={12} justify="center">
                        <Grid item xs={3}>
                            <div>
                                <Paper className="Item">
                                    <div className="Circle">
                                        <h5>01.</h5>
                                    </div>
                                    <h6>Android Applications</h6>
                                </Paper>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <Paper className="Item">
                                    <div className="Circle">
                                        <h5>02.</h5>
                                    </div>
                                </Paper>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <Paper className="Item">
                                    <div className="Circle">
                                        <h5>03.</h5>
                                    </div>
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default VortexComponents;