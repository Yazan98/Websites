import React, { Component } from 'react';
import ToolbarComponent from './ToolbarComponent';
import OverViewComponent from './OverViewComponent';
import PointsDescriptionComponent from './PointsDescription';
import VortexComponents from './VortexComponents';

class MainComponent extends Component {
    render() {
        return (
            <div className="VortexMainComponent">
                <ToolbarComponent />
                <OverViewComponent />
                <PointsDescriptionComponent />
                <VortexComponents />
            </div>
        );
    }
}

export default MainComponent;