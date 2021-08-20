import React from 'react';
import '../../styles/pages/directory.scss';
import MenuItem from '../../components/menu-item/MenuItem';
import { useSelector } from 'react-redux';

const Directory = () => {
	const sections = useSelector((state) => state.directory.sections);

	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherItemProps }) => <MenuItem key={id} {...otherItemProps} />)}
		</div>
	);
};

export default Directory;
