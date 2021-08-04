import React from 'react';
import '../../styles/pages/directory.scss';
import MenuItem from '../../components/menu-item/MenuItem';
import braceletImg from '../../images/bracelet/turquoise-and-amazonite-stretch/turquoise2.jpg';
import customImg from '../../images/custom-mala/custom8.jpg';
import necklaceImg from '../../images/necklace/mycelium/mycelium4.jpg';
import ringImg from '../../images/ring/dalmatian-and-jasper-gold/gold2.jpg';
import strandImg from '../../images/strand/amazonite/amazonite1.jpg';

const Directory = () => {
	const [ sections, setSections ] = React.useState([
		{
			title  : 'bracelets',
			imgUrl : braceletImg,
			id     : 1
		},
		{
			title  : 'strands',
			imgUrl : strandImg,
			id     : 2
		},
		{
			title  : 'rings',
			imgUrl : ringImg,
			id     : 3
		},
		{
			title  : 'necklaces',
			imgUrl : necklaceImg,
			size   : 'large',
			id     : 4
		},
		{
			title  : 'custom mala',
			imgUrl : customImg,
			size   : 'large',
			id     : 5
		}
	]);
	return (
		<div className='directory-menu'>
			{sections.map((section) => (
				<MenuItem key={section.id} title={section.title} imgUrl={section.imgUrl} size={section.size} />
			))}
		</div>
	);
};

export default Directory;
