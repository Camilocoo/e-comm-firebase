import React, { Component } from 'react'
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/preview-collection/previw-collection.component'

export default class shopPage extends Component {
    constructor(){
        super();
        this.state={
           collections: SHOP_DATA
        }
        
    }
    render() {
    
        const {collections}=this.state;
        console.log(`collections`,collections)
        return (
            <div className="shop-page">
                {collections.map(({id,...otherCollectionProps})=>{
                    return(
                        <CollectionPreview
                            key={id}
                            {...otherCollectionProps}


                        
                        />
                    )
                })}
            </div>
        )
    }
}
