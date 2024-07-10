import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from './A';

function D() {
  // var [loading, setLoading] = useState(false);
  // var [data, setData] = useState([]);
  // var [error, setError] = useState('');
  // console.log('render');

  // useEffect(() => {
  //   console.log('effect called');
  //   setTimeout(() => {
  //     setLoading(true);
  //   }, 4000);
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setTimeout(() => {
  //         setLoading(false);
  //         setData(res);
  //       }, 6000);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setError(err);
  //       console.log(err);
  //     });
  // }, []);

  // function D() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then((res) => {
  //       return res.json()
  //       }).then((res) => {
  //         console.log(res)
  //         setData(res)
  //     })
  // }
//  var num =  productsContext._currentValue
  var resdata = useContext(productsContext)
  console.log(resdata)
  
  
  return (
    <div>
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

export default D;
