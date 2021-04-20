import React from 'react'
import './collections-overview.styles.scss'
import {connect} from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'


const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({id , ...OtherProps}) => (
                    <CollectionPreview key={id} {...OtherProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
