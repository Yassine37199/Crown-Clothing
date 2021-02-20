import React from 'react'
import DirectoryMenu from '../../Components/directory-menu/directory-menu.component'

import './Homepage.styles.scss'


const HomePage = () => (
    <div>
        <header className="header">
            Header works
        </header>
        <div className="homepage">
            <DirectoryMenu />
        </div>
    </div>
)

export default HomePage;