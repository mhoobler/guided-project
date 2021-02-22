import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ItemContainer from '../components/ItemContainer';

const Home: React.FC = () => {

  const [itemsList, setItemsList] = useState<ItemEntry[]>([]);
  const getItems = axios.get('https://gp-super-store-api.herokuapp.com/item/list?size=29');

  useEffect( () => {
    getItems
    .then( res => {
      const {items} = res.data;
      setItemsList(items);
    })
    .catch( err => console.log(err))
  }, [])  

  return(
    <div>
      <h2>Home</h2>

      <ItemContainer itemsList={itemsList} />
    </div>
  )
}

export default Home