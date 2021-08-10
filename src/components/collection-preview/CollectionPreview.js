import React from 'react';
import '../../styles/components/collection-preview.scss';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = (props) => {
	const { title, items } = props.collection;
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title}</h1>
			<div className='preview'>
				{items.slice(0, 4).map((item) => (
					<CollectionItem key={item.id} item={item}>
						{item.name}
					</CollectionItem>
				))}
			</div>
		</div>
	);
};

export default CollectionPreview;
