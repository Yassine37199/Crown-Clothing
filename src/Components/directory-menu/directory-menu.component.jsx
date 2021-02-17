import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import {section} from '../../directory';

import './directory-menu.styles.scss'


class DirectoryMenu extends Component {
    constructor(){
        super();

        this.state = {

            sections : [
                {
                    title : 'Adventure',
                    imageUrl : 'https://store-images.s-microsoft.com/image/apps.24101.13841339086540201.963451fc-271b-4371-9180-313f491b5562.4e4f75a0-4e64-4fd2-8e83-d6c2a3c941a1?mode=scale&q=90&h=1080&w=1920',
                    id : 1,
                    linkUrl : 'shop/adventure'
            
                },
                {
                    title : 'Action',
                    imageUrl : 'https://store-images.s-microsoft.com/image/apps.14704.67980834390914492.12ed9840-6570-4b28-8c1a-145f4fc183b5.8f42a7aa-682c-448a-bfce-23dcc32dbadf?mode=scale&q=90&h=1080&w=1920',
                    id : 2,
                    linkUrl : 'shop/action'
            
                },
                {
                    title : 'Multiplayer',
                    imageUrl : 'https://cdn.wccftech.com/wp-content/uploads/2020/10/Overwatch-2-2060x1159.jpg',
                    id : 3,
                    linkUrl : 'shop/multiplayer'
            
                },
                {
                    title : 'Survival',
                    imageUrl : 'https://store-images.s-microsoft.com/image/apps.47843.68986806511725911.f424da40-674e-41a9-878c-7a524fa56895.f1496447-da74-4070-887c-e8cd3e366e38?mode=scale&q=90&h=1080&w=1920',
                    id : 4,
                    linkUrl : 'shop/survival',
                    size : 'large'
            
                },
                {
                    title : 'Puzzle',
                    imageUrl : 'https://www.godisageek.com/wp-content/uploads/Little-Nightmares-II-Demo-News.jpg',
                    id : 5,
                    linkUrl : 'shop/puzzle',
                    size : 'large'
            
                }
            
            ]
        }
    }


    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map(({id , ...OtherProps}) => (
                    <MenuItem key={id} {...OtherProps} />
                ))}
            </div>
        )
    }
}

export default DirectoryMenu