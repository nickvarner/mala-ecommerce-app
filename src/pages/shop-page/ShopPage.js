import React from 'react';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import { Route } from 'react-router';

const ShopPage = ({ match }) => (
	<div className='shop-page'>
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>
);

export default ShopPage;
