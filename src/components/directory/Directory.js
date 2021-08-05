import React from 'react';
import '../../styles/pages/directory.scss';
import MenuItem from '../../components/menu-item/MenuItem';
import braceletImg from '../../images/bracelet/turquoise-and-amazonite-stretch/turquoise2.jpg';
import customImg from '../../images/custom-mala/custom1.jpg';
import necklaceImg from '../../images/necklace/mycelium/mycelium4.jpg';
import ringImg from '../../images/ring/dalmatian-and-jasper-gold/gold2.jpg';
import strandImg from '../../images/strand/amazonite/amazonite1.jpg';

const Directory = () => {
	const [ sections ] = React.useState([
		{
			title   : 'bracelets',
			imgUrl  : braceletImg,
			id      : 1,
			linkUrl : 'bracelets'
		},
		{
			title   : 'strands',
			imgUrl  : strandImg,
			id      : 2,
			linkUrl : 'strands'
		},
		{
			title   : 'rings',
			imgUrl  : ringImg,
			id      : 3,
			linkUrl : 'rings'
		},
		{
			title   : 'necklaces',
			imgUrl  : necklaceImg,
			size    : 'large',
			id      : 4,
			linkUrl : 'necklaces'
		},
		{
			title   : 'custom mala',
			imgUrl  : customImg,
			size    : 'large',
			id      : 5,
			linkUrl : 'custommala'
		}
	]);
	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherItemProps }) => <MenuItem key={id} {...otherItemProps} />)}
		</div>
	);
};

export default Directory;
