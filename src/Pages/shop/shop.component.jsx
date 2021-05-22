import React, { Component } from 'react'
import CollectionsOverview from '../../Components/collections-overview/collections-overview.component'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { UpdateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';


const CollectionsOverviewWithSprinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSprinner = WithSpinner(CollectionPage);



class shopPage extends Component{

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;
       
    componentDidMount(){
        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading : false})
        })
    }
    
    render(){
        const {match} = this.props;
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSprinner isLoading={this.state.loading} {...props} />}/>
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionsPageWithSprinner isLoading={this.state.loading} {...props} />} />
            </div>
        )
    }





}

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(UpdateCollections(collectionsMap))
})




export default connect(null , mapDispatchToProps)(shopPage)