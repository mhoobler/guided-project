import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ItemContainer from '../components/ItemContainer';

import './styles/Home.css';

const Home: React.FC = () => {

  const [itemsList, setItemsList] = useState<ItemEntry[]>([]);
  const [searchString, setSearchString] = useState<string>(''); 
  const getQuery = axios.get('https://gp-super-store-api.herokuapp.com/item/list?size=29&q=' + searchString);

  const getItems = () => {
    getQuery
    .then( res => {
      const {items} = res.data;
      setItemsList(items);
    })
    .catch( err => console.log(err))
  }

  useEffect( () => {
    getItems()
  }, [])  

  return(
    <div className='page-wrapper' id='Home'>
      {/* Search bar has VISUAL BUG */}
      <div className='search-container'>
        <input 
        type='text' 
        placeholder='Search'
        onChange={ (evt) => {
          setSearchString(evt.currentTarget.value)
        } }
        />
        <button onClick={getItems}>O</button>
      </div>

      <div className='content'>
        <ItemContainer itemsList={itemsList} />
      </div>
    </div>
  )
}

export default Home