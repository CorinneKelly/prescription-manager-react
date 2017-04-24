import React, { Component } from 'react'
import AddPrescription from './AddPrescription'
import Prescriptions from './Prescriptions'
import FullSchedule from './FullSchedule'
import { connect } from 'react-redux'
import { getPrescriptions } from '../actions/prescription'
import { bindActionCreators } from 'redux'




class Home extends Component {
	constructor (){
		super()
		this.state = {
			presOpen: false,
			schedOpen: false,

			presImage: "closedBottlePink.svg",
			schedImage: "calendarPink.svg"
		}
		this.handleOnClickPrescriptions = this.handleOnClickPrescriptions.bind(this)
		this.handleOnClickSchedule = this.handleOnClickSchedule.bind(this)
	}

	componentWillMount(){
		this.props.getPrescriptions()
	}

	handleOnClickSchedule(event) {
		event.preventDefault()
		if (!this.state.schedOpen) {
			document.getElementById("sched-image").animate([
		    { transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`},
		    { transform: `rotateX(360deg) rotateY(1800deg) rotateZ(360deg)`}
		  ], {
		    duration: 1000,
		    easing: "ease-in-out",
		    fill: "forwards"
		  })

			this.setState({
				presOpen: false,
				schedOpen: !this.state.schedOpen,
				presImage: "closedBottlePink.svg"
			})

			document.getElementById("pres-image").animate([
				{ transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`},
				    { transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`}
				  ], {
				    duration: 1000,
				    easing: "ease-in-out",
				    fill: "forwards"
				  })

		} else {
				document.getElementById("sched-image").animate([
				{ transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`},
				    { transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`}
				  ], {
				    duration: 1000,
				    easing: "ease-in-out",
				    fill: "forwards"
				  })
			this.setState({
				schedOpen: !this.state.schedOpen
			})
		}
	}


	handleOnClickPrescriptions(event) {
		event.preventDefault()

		if (!this.state.presOpen) {
			document.getElementById("pres-image").animate([
			    { transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`},
			    { transform: `rotateX(540deg) rotateY(1800deg) rotateZ(0deg)`}
			  ], {
			    duration: 1000,
			    easing: "ease-in-out",
			    fill: "forwards"
			  })

			document.getElementById("sched-image").animate([
				{ transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`},
				    { transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`}
				  ], {
				    duration: 1000,
				    easing: "ease-in-out",
				    fill: "forwards"
				  })

			this.setState ({
				presOpen: !this.state.presOpen,
				schedOpen: false,
				presImage: "openBottlePink.svg",
			})

		} else {
			document.getElementById("pres-image").animate([
				{ transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`},
				    { transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`}
				  ], {
				    duration: 1,
				    easing: "ease-in-out",
				    fill: "forwards"
				  })
			this.setState({
				presImage: "closedBottlePink.svg",
				presOpen: !this.state.presOpen
			})
		}
	}

	showPrescriptions(){
		// if (this.state.presOpen){
			// this.setState({
			// 	schedOpen: false
			// })
			return <Prescriptions />
			// prescriptions will return a list of <li>prescriptions</li>
		// } else if(this.state.presOpen){
		// 	// this.setState({
		// 	// 	schedOpen: false
		// 	// })
		// 	return <Prescriptions />
		// } else {
		// 	return null
		// }
	}

	showSchedule(){
		if (this.state.schedOpen){
			// this.setState({
			// 	presOpen: false
			// })
			return <li><FullSchedule /></li>
		} else if (this.state.schedOpen) {
			// this.setState({
			// 	presOpen: false
			// })
			return <li><FullSchedule /></li>
		} else {
			return null	
		}
	}

	render(){

		return (
			<div className="home-wrapper" >
				<ul className="home-list">
					<li className="list-item home-list-item">
						<img className="image-flex" src="add-pillPink.svg" width="90" height="85" />
						<a href="/add-prescription" className="list-flex" id="add-pres-link" >
						Add a Prescription
						</a>
					</li>

					<li className="list-item home-list-item">
						<img className="image-flex" id="pres-image" width="90" src={this.state.presImage} />
						<button className="list-flex" onClick={this.handleOnClickPrescriptions} >
						Your Prescriptions
						</button>
					</li>
							{this.state.presOpen ? <Prescriptions /> : null}

					<li className="list-item home-list-item">
						<img className="image-flex" id="sched-image" width="90" src={this.state.schedImage} />
						<button className="list-flex" onClick={this.handleOnClickSchedule} >
						Schedule
						</button>
					</li>
							{this.showSchedule()}
				</ul>

			</div>
		)
	}
}


const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		getPrescriptions
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)
