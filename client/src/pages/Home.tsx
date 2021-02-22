import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ItemCard from '../components/ItemCard';

import './styles/Home.css';

const Home: React.FC = () => {

  const [itemList, setItemList] = useState<ItemEntry[]>([]);
  const getItems = axios.get('https://gp-super-store-api.herokuapp.com/item/list?size=29');

  useEffect( () => {
    getItems
    .then( res => {
      const {items} = res.data;
      setItemList(items);
    })
    .catch( err => console.log(err))
  }, [])  

  return(
    <div>
      <h2>Home</h2>

      <div className='items-container'>
        {itemList.map( (e: ItemEntry, i:number) => {
          return <ItemCard key={i} item={e}/>
        })}
      </div>
    </div>
  )
}

export default Home