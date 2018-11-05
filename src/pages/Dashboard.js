import React, { Component } from 'react';
import { connect } from 'react-redux';
import noUiSlider from 'nouislider';
import axios from 'axios';
import backendConfig from '../config/backendURL';
import { firebaseDB } from '../config/firebase_config';
import InfoCard from '../components/InfoCard';

const centerItems = {
    alignItems: "center",
    display: "flex"
};

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uid: props.user.uid,
            data: {},
            sliderVal: 0
        };
        this.waterPlant = this.waterPlant.bind(this);
    }

    componentWillMount() {
        let dbRef = firebaseDB.ref(`/users/${this.state.uid}`)
        dbRef.on("value", data => {
            this.setState({data: data.val()})
        })
    }

    waterPlant() {
        axios.post(backendConfig.url + this.state.uid,
            {
                command: "WaterPlant",
                data: this.state.sliderVal
            })
    }

    componentDidUpdate() {
        try {
            let slider = document.getElementById("slider");
            noUiSlider.create(slider, {
                start: [this.state.sliderVal],
                connect: [true, false],
                step: 0.5,
                orientation: 'horizontal', // 'horizontal' or 'vertical'
                range: {
                    'min': 0,
                    'max': 20
                }
            });
            slider.noUiSlider.on("update", (val) => {
                this.setState({
                    sliderVal: parseFloat(val)
                });
            });
        } catch (e) {}
    }

    render() {
        if(Object.keys(this.state.data).length === 0 && this.state.data.constructor === Object) {
            return(
                <div>
                    <h3 style={{textAlign: "center"}}>
                        Oops, you don't seem to have a device set up!
                    </h3>
                </div>
            );
        }

        return(
            <div className="container">
                <h3>Dashboard</h3>
                <hr/><br/>
                <div className="row" style={centerItems}>
                    <div className="col s1">
                        <div className="btn-floating btn-large pulse blue waves-effect waves-light" onClick={this.waterPlant}>
                            <i className="fa fa-tint"/>
                        </div>
                    </div>
                    <div className="col s1" style={{textAlign:"center"}}>
                            {this.state.sliderVal} <br/>
                            seconds
                    </div>
                    <div className="col s9 offset-s1">
                        <div className='range-field' id="slider"/>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    {[{
                            color: "red",
                            data: "Temperature",
                            icon: "temperature-high",
                            padding: "16pt"
                        }, {
                            color: "blue",
                            data: "Humidity",
                            icon: "cloud",
                            padding: "12pt"
                        }, {
                            color: "green",
                            data: "Soil Moisture 0",
                            icon: "water",
                            padding: "13pt"
                        }].map((item)=> {
                            return <InfoCard color={item.color}
                                             data={this.state.data[item.data]}
                                             description={item.data}
                                             icon={item.icon}
                                             padding={item.padding}/>
                        })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.setAuth.user
    }
}

const connectedDashboard = connect(mapStateToProps)(Dashboard)
export default connectedDashboard;