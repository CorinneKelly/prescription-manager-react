import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import BurgerMenu from './BurgerMenu'

class Prescription extends Component {

	constructor(){
		super()

		this.state = {
			display: ""

		}

		this.showDetails = this.showDetails.bind(this)
		this.showSymptoms = this.showSymptoms.bind(this)
		this.renderDetails = this.renderDetails.bind(this)
	}

	showDetails(){
		if (this.state.display === "presDetails") {
			this.setState({
				display: ""
			})
			
		} else {
			this.setState({
				display: "presDetails"
			})			
		}
	}

	renderDetails(){
		if (this.state.display === "presDetails") {
			var currRx = this.props.prescription.allPrescriptions[this.props.match.params.prescriptionId]
			return (
				<div>
					<li className="list-item">
						<div className="image-flex">Dosage: {currRx.dosage} {currRx.units}</div>
					</li>

					<li className="list-item">
						<div className="image-flex">Instructions: {currRx.instructions}</div>
					</li>

					<li className="list-item">
						<div className="image-flex">{currRx.refills} refill(s) left</div>
					</li>

					<li className="list-item">
						{currRx.doctor !== null ? currRx.doctor : null}
					</li>

				</div>
			)}
		
	}

	showSymptoms(){
		this.setState({
			display: "symptoms"
		})
	}

	renderSymptoms(){
		if (this.state.display==="symptoms"){
			//const symptoms = symptom array from api

			// let symptomList = symptoms.map((symptom)=>{
			// 	return `<li> ${symptom} </li>`
			// })
			// symptomList.push("<input type='text' placeholder='Add new symptom' />")
			// return {symptomList}


		}else{
			return null
		}
	}



	render() {
		return (
			<div >
				<BurgerMenu />
				<ul>
					<li className="list-item  pres-page-list-item">
						<img className="image-flex" src="../rxBottleBrightBlue.svg" />
						<button className="list-flex" onClick={this.showDetails}> Prescription Details </button>
					</li>
					{this.renderDetails()}
					
					<li className="list-item  pres-page-list-item">
						<img className="image-flex" src="../symptomTrackerBrightBlue.svg" />
						<button className="list-flex" onClick={this.showSymptoms}> Symptom Tracker </button>
					</li>
					{this.renderSymptoms()}
					
				</ul>

			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		prescription: state.prescription
	}
}

export default connect(mapStateToProps)(Prescription)








// const fakeTest = [{
// 			prescription: {
// 				name: "Drug Name 1",
// 				instructions: "Take drug 1 always nonstop",
// 				dosage: 2,
// 				units: "pills",
// 				quantity: 60,
// 				refills: 3,
// 				doctor: "dr. sassafrass"
// 			},
// 			schedule: {
// 				start_date: "2017-04-19",
// 				end_date: "2017-07-19",
// 				frequency: "daily",
// 				hours: ["09:00", "09:30"],
// 				weekdays: [],
// 				month_days: [],
// 				expiration_date: "2018-04-19"
// 			}
// 		}, {
// 			prescription: {
// 				name: "Drug Name #2",
// 				instructions: "Take This only sometimes",
// 				dosage: 5,
// 				units: "mg",
// 				quantity: 20,
// 				refills: 0,
// 				doctor: "dr. bob"
// 			},
// 			schedule: {
// 				start_date: "2017-04-20",
// 				end_date: "2017-05-16",
// 				frequency: "weekly",
// 				hours: ["07:00", "11:00", "20:00"],
// 				weekdays: ["Monday", "Wednesday"],
// 				month_days: [],
// 				expiration_date: "2018-04-19"
// 			}
// 		}, {
// 			prescription: {
// 				name: "Drug Name #3",
// 				instructions: "Take This monthly",
// 				dosage: 7,
// 				units: "mL",
// 				quantity: 200,
// 				refills: 3,
// 				doctor: "dr. joe"
// 			},
// 			schedule: {
// 				start_date: "2017-04-21",
// 				end_date: "2018-05-20",
// 				frequency: "monthly",
// 				hours: ["09:00", "10:00"],
// 				weekdays: [],
// 				month_days: [1, 15],
// 				expiration_date: "2018-04-19"
// 			}
// 		}
// 		]



		// first map under nextDose: this.props.prescriptions

		// function nextHour(argument) {
		// 	let currDate = new Date()
		// 	let currTime = (currDate.getHours() + ":" + currDate.getMinutes())
		// 	debugger
		// 	argument.find((hour) => {
		// 		if (hour > currTime) {
		// 			debugger
		// 			return hour.toString()
		// 		} 
		// 	})
		// }

		// let nextDose = fakeTest.find((pres) => {
		// 		let currDate = new Date()
		// 		let currTime = (currDate.getHours() + ":" + currDate.getMinutes())
		// 		debugger
		// 	if (pres.schedule.frequency === "daily") {
		// 		// pres.schedule.frequency
		// 		debugger
		// 		return nextHour(pres.schedule.hours)
		// 		// pres.schedule.hours
		// 	} else if (pres.schedule.frequency === "weekly") {
		// 		let dayIndexArr = pres.schedule.weekdays.map((day) => {

		// 			switch(day) {
		// 				case "Sunday":
		// 					return 0
		// 				case "Monday":
		// 					return 1
		// 				case "Tuesday":
		// 					return 2
		// 				case "Wednesday":
		// 					return 3
		// 				case "Thursday":
		// 					return 4
		// 				case "Friday":
		// 					return 5
		// 				case "Saturday":
		// 					return 6
		// 			}
		// 		}) //closes dayIndexArr

		// 		let currDayIndex = currDate.getDay()

		// 		let weeklyReturn = dayIndexArr.find((day, index) => {
		// 			if (currDayIndex === day && currTime > pres.schedule.hours[0]) {
		// 				return ("Today" + this.findNextHour(pres.schedule.hours[0]))
		// 			} else if(currDayIndex > dayIndexArr[dayIndexArr.length - 1]) {
		// 				return pres.schedule.weekdays[0]
		// 			} else if(currDayIndex < day) {
		// 				return pres.schedule.weekdays[index]
		// 			}
		// 		})
		// 		return weeklyReturn		
			
		// 	} else if (pres.schedule.frequency === "monthly") {
		// 		let currMonth = currDate.getMonth()
		// 		let currMonthDate = currDate.getDate()

		// 		let monthlyReturn =pres.schedule.month_days.find((date, index) => {

		// 			if (currMonthDate === date && currTime > pres.schedule.hours[0]) {
		// 				return ("Today" + this.findNextHour(pres.schedule.hours[0]))
		// 			} else if(currMonthDate > pres.schedule.month_days[pres.schedule.month_days.length - 1]) {
		// 				return (moment().month(currMonth + 1).format("MMMM") + pres.schedule.month_days[0])
		// 			} else if(currMonthDate < date) {
		// 				return (moment().month(currMonth).format("MMMM") + pres.schedule.month_days[index])
		// 			}
		// 		})

		// 		return monthlyReturn
		// 	}

		// })
		// debugger

					//need to retrieve next scheduled dose info to include in next line
