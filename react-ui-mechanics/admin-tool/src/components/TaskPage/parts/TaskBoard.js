import React, {Component} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {InProgress} from "./InProgress";
import {Completed} from "./Completed";

// fake data generator
const getItems = (count, offset = 0) =>
	Array.from({length: count}, (v, k) => k).map(k => ({
		id: `item-${k + offset}`,
		content: `item ${k + offset}`
	}));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
	const sourceClone = Array.from(source);
	const destClone = Array.from(destination);
	const [removed] = sourceClone.splice(droppableSource.index, 1);

	destClone.splice(droppableDestination.index, 0, removed);

	const result = {};
	result[droppableSource.droppableId] = sourceClone;
	result[droppableDestination.droppableId] = destClone;

	return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: 'none',
	padding: grid * 2,
	margin: `0 0 ${grid}px 0`,

	// change background colour if dragging
	background: isDragging ? 'lightgreen' : 'grey',

	// styles we need to apply on draggables
	...draggableStyle
});

const getListStyle = isDraggingOver => ({
	background: isDraggingOver ? 'lightblue' : 'lightgrey',
	padding: grid,
	width: 250
});

export class TaskBoard extends Component {
	state = {
		items: getItems(10),
		selected: getItems(5, 10)
	};

	/**
	 * A semi-generic way to handle multiple lists. Matches
	 * the IDs of the droppable container to the names of the
	 * source arrays stored in the state.
	 */
	id2List = {
		droppable: 'items',
		droppable2: 'selected'
	};

	getList = id => this.state[this.id2List[id]];

	onDragEnd = result => {
		const {source, destination} = result;

		// dropped outside the list
		if (!destination) {
			return;
		}

		if (source.droppableId === destination.droppableId) {
			const items = reorder(
				this.getList(source.droppableId),
				source.index,
				destination.index
			);

			let state = {items};

			if (source.droppableId === 'droppable2') {
				state = {selected: items};
			}

			this.setState(state);
		} else {
			const result = move(
				this.getList(source.droppableId),
				this.getList(destination.droppableId),
				source,
				destination
			);

			this.setState({
				items: result.droppable,
				selected: result.droppable2
			});
		}
	};

	// Normally you would want to split things out into separate components.
	// But in this example everything is just done in one place for simplicity
	render() {
		return (

			<DragDropContext onDragEnd={this.onDragEnd}>
				<div className='x-container'>
					<InProgress {...this.props} getItemStyle={getItemStyle} getListStyle={getListStyle} items={this.state.items}/>
					<Completed {...this.props} getItemStyle={getItemStyle} getListStyle={getListStyle} selected={this.state.selected}/>
				</div>
			</DragDropContext>
		);
	}
}
