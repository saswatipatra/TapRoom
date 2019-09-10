import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    name: 'ABC',
    brand: 'XYZ',
    price: '$5'
  },
  {
    name: 'DEF',
    brand: 'uvw',
    price: '$10'
  },
  {
    name: 'GHI',
    brand: 'RSP',
    price: '$15'
  }
];

function KegList(){
  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          key={index}/>
      )}
    </div>
  );
}

export default KegList