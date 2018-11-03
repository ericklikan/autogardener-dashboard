import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseDB } from '../config/firebase_config';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uid: props.user.uid,
            data: {}
        }
    }

    componentWillMount() {
        let dbRef = firebaseDB.ref(`/users/${this.state.uid}`)
        dbRef.on("value", data => {
            this.setState({data: data.val()})
        })
    }

    waterPlant() {
        console.log(document);
        console.log("Watering!");
    }

    render() {
        return(
            <div>

                <h1>Dashboard</h1>
                {JSON.stringify(this.state.data)}
                <div className="btn-floating btn-large pulse blue" onClick={this.waterPlant}>
                    <i className="fa fa-tint"/>
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