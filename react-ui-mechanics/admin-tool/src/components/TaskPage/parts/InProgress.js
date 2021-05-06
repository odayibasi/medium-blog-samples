import React, {Component} from 'react';
import {Draggable, Droppable} from "react-beautiful-dnd";

export class InProgress extends Component {
	render() {
		return (
			<div className='column'>
				<div className='header-container'>In Progress</div>
				<Droppable droppableId="droppable">
					{(provided, snapshot) => (
						<div
							ref={provided.innerRef}
							style={this.props.getListStyle(snapshot.isDraggingOver)}>
							{this.props.items.map((item, index) => (
								<Draggable
									key={item.id}
									draggableId={item.id}
									index={index}>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={this.props.getItemStyle(
												snapshot.isDragging,
												provided.draggableProps.style
											)}>
											{item.content}
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</div>
		)
	}


}