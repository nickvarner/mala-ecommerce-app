import React from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import { useSelector } from 'react-redux';

const ShopPage = () => {
	const collections = useSelector((state) => state.shop.collections);
	return (
		<div className='shop-page'>
			{collections.map((collection) => <CollectionPreview key={collection.id} collection={collection} />)}
		</div>
	);
};

export default ShopPage;
