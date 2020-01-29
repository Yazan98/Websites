import React, { Component } from 'react';
import ToolbarComponent from './ToolbarComponent';
import OverViewComponent from './OverViewComponent';
import PointsDescriptionComponent from './PointsDescription';
import VortexComponents from './VortexComponents';
import FooterComponent from './FooterComponent';

class MainComponent extends Component {
    render() {
        return (
            <div className="VortexMainComponent">
                <ToolbarComponent />
                <OverViewComponent />
                <PointsDescriptionComponent />
                {/* <VortexComponents /> */}
                <FooterComponent />
            </div>
        );
    }
}

export default MainComponent;