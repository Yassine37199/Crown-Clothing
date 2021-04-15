import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import {section} from '../../directory';
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selector'

import './directory-menu.styles.scss'
import { createStructuredSelector } from 'reselect';


const DirectoryMenu = ({sections}) =>  {

    return(
        <div className="directory-menu">
            {sections.map(({id , ...OtherProps}) => (
                <MenuItem key={id} {...OtherProps} />
            ))}
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps , null)(DirectoryMenu)