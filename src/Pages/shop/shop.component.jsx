import React from 'react'
import CollectionsOverview from '../../Components/collections-overview/collections-overview.component'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component'




const shopPage = ({ match }) => {
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }




export default shopPage