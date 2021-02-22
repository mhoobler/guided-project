import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ItemContainer from '../components/ItemContainer';

const Deals: React.FC = () => {

  const [itemsList, setItemsList] = useState<ItemEntry[]>([]);
  const getSales = axios.get('https://gp-super-store-api.herokuapp.com/item/list?isOnSale=true');

  useEffect( () => {
    getSales
    .then( res => {
      const {items} = res.data;
      setItemsList(items);
    })
    .catch( err => console.log(err))
  }, [])  

  return(
    <div className='page-wrapper' id='Deals'>
      <div className='content'>
        <ItemContainer itemsList={itemsList} />
      </div>
    </div>
  )
}

export default Deals