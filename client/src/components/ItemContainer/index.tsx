import React from 'react';

import ItemCard from '../ItemCard';

import './style.css';

type Props = {
  itemsList: ItemEntry[]
}

const ItemContainer: React.FC<Props> = (P) => {

  return(
    <div className='items-container'>
      {P.itemsList.map( (e: ItemEntry, i:number) => {
        return <ItemCard key={i} item={e}/>
      })}
  </div>
  )
}

export default ItemContainer;