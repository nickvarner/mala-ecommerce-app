import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/collection-preview.scss';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items, routeName }) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title}</h1>
			{items.length > 3 && (
				<Link to={`/shop/${routeName}`}>
					<small>...more</small>
				</Link>
			)}
			<div className='preview'>
				{items.filter((item, idx) => idx < 3).map((item) => <CollectionItem key={item.id} item={item} />)}
			</div>
		</div>
	);
};

export default CollectionPreview;
