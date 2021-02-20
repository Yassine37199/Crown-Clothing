import React, { Component } from 'react'
import CollectionPreview from '../../Components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data'




class shopPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections : SHOP_DATA
        }
    }



    render(){
        const {collections} = this.state; 
        return(
            <div className="shop-page">
                {collections.map(({id , ...OtherProps}) => (
                    <CollectionPreview key={id} {...OtherProps} />
                ))}
            </div>
        )
    }
}

export default shopPage