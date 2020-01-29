import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class ToolbarComponent extends Component {

    render() {
        return (
            <div className="VortexToolbar">
                <AppBar position="static" color="white">
                    <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Vortex
                    </Typography>
                    <Grid justify="space-between"  container spacing={24}>
                        <Grid item>
                            <Typography type="title" color="inherit">
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Router>
                                <div>
                                <Link to="/documentation">
                                    <Button raised color="accent">
                                        Documentation
                                    </Button>
                                </Link>
                                <Link to="source_code">
                                    <Button raised color="accent">
                                        Source Code
                                    </Button>
                                </Link>
                                <Link to="about">
                                    <Button raised color="accent">
                                        About
                                    </Button>
                                    <Button raised color="accent">
                                        Examples
                                    </Button>
                                </Link>
                                </div>
                            </Router>
                        </Grid>
                    </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
    
}

export default ToolbarComponent;
