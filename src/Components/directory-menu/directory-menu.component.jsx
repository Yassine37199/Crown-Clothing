import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './directory-menu.styles.scss'


const DirectoryMenu = () => (
    <div className="directory-menu">
        <MenuItem name="puzzle" />
        <MenuItem name="action" /> 
        <MenuItem name="adventure" /> 
        <MenuItem name="multiplayer" />
        <MenuItem name="survival" /> 
    </div>
)

export default DirectoryMenu