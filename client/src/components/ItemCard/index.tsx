import React from 'react';
import PropTypes from 'prop-types';

import Full from '../resources/star_full.svg';
import Half from '../resources/star-half.svg';
import Empty from '../resources/star-empty.svg';

import './ItemCard.css'


type Props = {
  item: ItemEntry
}

const ItemCard: React.FC<Props> = (P) => {

  // Determine which stars need to be Full, Half, or Empty
  const getStars = () => {
    let stars: string[] = [];

    if(P.item.avgRating % 1 === 0){
      for(let i=0; i<5; i++){
        i < P.item.avgRating ? stars.push(Full) : stars.push(Empty);
      }
    } else {
      let floor = Math.floor(P.item.avgRating)
      for(let i=0; i<5; i++){
        i < floor ? stars.push(Full) :
        i === floor ? stars.push(Half) :
        stars.push(Empty);
      }
    }

    return stars;
  }

  // Add trailing 0's if needed
  const formatPrice = () => {
    const splitArr = String(P.item.price).split('.');
    if(splitArr[1] && splitArr[1].length !== 2){
      return P.item.price + '0';
    }

    return P.item.price;
  }

  return(
    <div className='item-card-container'>
      {/* Image */}
      <div className='item-image-wrapper'>
        <img className='img-contain' src={P.item.imageUrl} alt={P.item.name} />
      </div>
      {/* Details */}
      <div className='item-details'>

        {/* Name */}
        <div className='item-name'>{P.item.name}</div>

        {/* Rating */}
        <div className='item-rating'>
          {getStars().map( (e: string, i: number) => {
            return <div className='svg-container'><img key={i} src={e} /></div>
          })}
        </div>

        {/* Price */}
        <div className='item-price'>
          ${formatPrice()} {P.item.isOnSale ? <span className='on-sale'>On Sale</span> : null}
        </div>

        {/* View Item */}
        
      </div>
    </div>
  )
}

/*
Read from a couple sources that prop-types isn't really necessary with typescript.
The main difference seems to be: prop-types checks at runtime
and typescript checks at compile time.
*/
ItemCard.propTypes = {
  item: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    avgRating: PropTypes.number.isRequired,
    isOnSale: PropTypes.bool.isRequired,
    stockCount: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
  }).isRequired
}

export default ItemCard;