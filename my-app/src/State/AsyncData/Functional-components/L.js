import React, { useState, useContext } from 'react'
import { productsContext } from './A';

function L() {

  var resdata = useContext(productsContext);
  return (
    <div>
      L: component data
      {resdata.loading ? (
        <h4>Loading</h4>
      ) : resdata.error ? (
        <h4>{resdata.error}</h4>
      ) : (
        resdata.data.map((obj) => {
          return (
            <p>
              {obj.id}. {obj.title}
            </p>
          );
        })
      )}
    </div>
  );
}

export default L