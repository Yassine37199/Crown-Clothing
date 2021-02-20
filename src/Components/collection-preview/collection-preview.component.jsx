import React from 'react'






const CollectionPreview = ({title , items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            items.filter((item , idc) => idc < 4).map(({name , id}) => (
                <div key={id}>{name}</div>
            ))
        }
        </div>
        
    </div>
)

export default CollectionPreview