import React, { Component } from 'react'
import AdminServices from '../services/AdminServices'


class ViewHistoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pId: this.props.match.params.pId,
            treatmentHistory: []

        }
    }

    Home() {
        window.location.href = '/home'
    }

    addTreatment() {
        this.props.history.push('/add-treatment')
    }

    componentDidMount() {
        AdminServices.getTreatmentById(this.state.pId).then(res => {
            console.log(res.data);
            this.setState({ treatmentHistory: res.data });
        })
    }

    render() {
        return (
            <div>
                <div className="Login">
                    <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>

                    <br></br>
                    {/* <div className="card col-md-6 offset-md-3"> */}
                    <h3 className="text-center"> View Treatment Details</h3>
                    {/* <div className = "card-body">
                                          <div className = "row">
                            <label>Date Of Arrival: </label>
                            <div> { this.state.treatmentHistory.dateOfArrival }</div>
                        </div>
                        <div className = "row">
                            <label> Treatment Cost: </label>
                            <div> { this.state.treatmentHistory.treatmentCost }</div>
                        </div>
                        <div className = "row">
                            <label>Medication: </label>
                            <div> { this.state.treatmentHistory.consultation }</div>
                        </div>
                        <div className = "row">
                            <label>Disease: </label>
                            <div> { this.state.treatmentHistory.disease}</div>
                        </div>
                    </div> */}

                    <div className="container">
                        <div className="row">
                            <table className="table table-striped table-bordered table-dark">

                                <thead>
                                    <tr>
                                        <th>Treatment Id</th>
                                        <th>Date Of Arrival</th>
                                        <th>Treatment Cost</th>
                                        <th>Consultation</th>
                                        <th>Diesease</th>
                                        <th> Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.treatmentHistory.map(
                                            treatmentHistory =>
                                                <tr key={treatmentHistory.tId}>
                                                    <td> {treatmentHistory.tId}</td>
                                                    <td> {treatmentHistory.dateOfArrival} </td>
                                                    <td> {treatmentHistory.treatmentCost} </td>
                                                    <td> {treatmentHistory.consultation} </td>
                                                    <td> {treatmentHistory.disease} </td>

                                                    <td><button style={{ marginLeft: "10px" }} onClick={() => this.addTreatment()} className="btn btn-info">Add Treatment</button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>

                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default ViewHistoryComponent