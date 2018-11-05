import React, { Component } from 'react';

const iconCardStyle = {
    width: "50pt",
    height: "50pt",
    position: "absolute",
    left:"5pt",
    top:"-30pt",
    borderRadius:"20pt",
    zIndex: 1
};

const dataCardStyle = {
    marginTop:"30pt"
};

class InfoCard extends Component {

    constructor(props) {
        super(props);
        this.suffix = {
            "Temperature": "℃",
            "Humidity": "%",
            "Soil Moisture 0": "%",
        }
    }

    render() {
        return (
            <div className='col s12 m4' >
                <div id="parent" style={{position:"relative"}}>
                    <div className={`card-panel ${this.props.color}`} style={{...iconCardStyle,...{padding: this.props.padding}}}>
                        <span><i className={`fa fa-${this.props.icon} small white-text`}/></span>
                    </div>
                    <div className="card" style={dataCardStyle}>
                        <div className="card-content grey lighten-3">
                            <div className="card-title" style={{textAlign:"center"}}>
                                {this.props.data} {this.suffix[this.props.description]}
                            </div>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoCard;