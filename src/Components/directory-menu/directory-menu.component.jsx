import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selector'

import { createStructuredSelector } from 'reselect';
import { DirectoryMenuContainer } from './directory-menu.styles';


const DirectoryMenu = ({sections}) =>  {

    return(
        <DirectoryMenuContainer>
            {sections.map(({id , ...OtherProps}) => (
                <MenuItem key={id} {...OtherProps} />
            ))}
        </DirectoryMenuContainer>
    )

}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps , null)(DirectoryMenu)