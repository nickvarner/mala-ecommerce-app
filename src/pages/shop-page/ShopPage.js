import React from 'react';
import SHOP_DATA from '../../data/shopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

const ShopPage = () => {
	const [ collections ] = React.useState(SHOP_DATA);
	return (
		<div className='shop-page'>
			{collections.map((collection) => <CollectionPreview key={collection.id} collection={collection} />)}
		</div>
	);
};

export default ShopPage;
