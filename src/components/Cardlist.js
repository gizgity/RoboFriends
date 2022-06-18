import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
	// go through robots array (robots.map) and put infomation to robots card display
	const cardComponent = robots.map((user, i) => { 
		return (
			<Card 
				key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email} />
		);
	})
	return(
		<div>
		   {cardComponent}
		</div>
	);
}

export default Cardlist;