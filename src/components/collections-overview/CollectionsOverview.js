import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/CollectionPreview';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

import '../../styles/components/collections-overview.scss';

const CollectionsOverview = ({ collections }) => (
	<div className='collections-overview'>
		{collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections : selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);