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

    render() {
        return(
            <div>
                <h1>Dashboard</h1>
                {JSON.stringify(this.state.data)}
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header">Test</div>
                        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                    </li>
                </ul>
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