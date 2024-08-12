import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: ${props.budget}</span>
			<button type='button' class='btn btn-secondary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;