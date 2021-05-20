import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss'
import {connect} from 'react-redux'
import {addItems} from '../../redux/cart/cart.actions'




const CollectionItem = ({item ,  addItems }) => (
    <div className="collection-item">
        <div className="image"
            style={{
                backgroundImage : `url(${item.imageUrl})`
            }}
            />
        <div className="collection-footer">
            <span className="name">{item.name}</span>
            <span className="price">{item.price}</span>
        </div>
        <CustomButton className='custom-button' inverted onClick={() => addItems(item)}> Add to cart</CustomButton>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addItems : item => dispatch(addItems(item))
})

export default connect(null , mapDispatchToProps)(CollectionItem)