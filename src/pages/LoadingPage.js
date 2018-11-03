import React, { Component } from 'react';
import { connect } from 'react-redux';

const pageStyle = {
    position: "absolute",
    top :0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto"
};

class LoadingPage extends Component {

    render() {
        return (
            <div style={pageStyle} className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
            )
    }
}

const connectedLoadingPage = connect()(LoadingPage)
export default connectedLoadingPage;