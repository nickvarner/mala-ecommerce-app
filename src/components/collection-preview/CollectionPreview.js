import React from 'react';
import '../../styles/components/collection-preview.scss';

const CollectionPreview = (props) => {
	const { title, items } = props.collection;
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title}</h1>
			<div className='preview'>
				{items.slice(0, 4).map((item) => (
					<div className='item' key={item.id}>
						{item.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default CollectionPreview;
