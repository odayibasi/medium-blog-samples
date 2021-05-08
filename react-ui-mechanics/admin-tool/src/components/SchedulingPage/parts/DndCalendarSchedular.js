import React, {Component} from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localize = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export class DndCalendarSchedular extends Component {

	constructor(props) {
		super(props);
		this.state = {events: []}
	}


	handleSelectSlot = (event) => {
		const {start, end} = event
		const title = window.prompt('New Event name')
		if (title) {
			const cloneEvents = [...this.state.events];
			cloneEvents.push({start, end, title})
			this.setState({events: cloneEvents})
		}
	}

	handleSelectEvent = (event) => {
		const {title} = event;
		alert(title);
	}


	onEventDrop = (e) => {
		const {event, start, end} = e;
		const cloneEvents = [...this.state.events];
		const index = cloneEvents.findIndex(el => el.title = event.title);
		cloneEvents.splice(index, 1); //Deletion
		cloneEvents.push({title: event.title, start: start, end: end}); //AddNew Event
		this.setState({events: cloneEvents})
	}

	onEventResize = (e) => {
		const {event, start, end} = e;
		const cloneEvents = [...this.state.events];
		const index = cloneEvents.findIndex(el => el.title = event.title);
		cloneEvents.splice(index, 1); //Deletion
		cloneEvents.push({title: event.title, start: start, end: end}); //AddNew Event
		this.setState({events: cloneEvents})
	};


	render() {
		return (
			<DnDCalendar
				selectable
				resizable
				localizer={localize}
				defaultView="month"
				defaultDate={moment().toDate()}
				events={this.state.events}
				onEventDrop={this.onEventDrop}
				onEventResize={this.onEventResize}
				onSelectEvent={this.handleSelectEvent}
				onSelectSlot={this.handleSelectSlot}
			/>
		);
	}
}
