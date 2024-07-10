import React, { useEffect, useState } from 'react'
import B from './B'
import C from './C'

export var productsContext = React.createContext()
console.log(productsContext._currentValue)

function A() {
  var [loading, setLoading] = useState(false);
  var [data, setData] = useState([]);
  var [error, setError] = useState('');

  useEffect(() => {
    console.log('effect called');
    setTimeout(() => {
      setLoading(true);
    }, 4000);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setLoading(false);
          setData(res);
        }, 6000);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div>
      <productsContext.Provider value={{loading: loading, data: data, error: error}}>
      <B />
      <C />
      </productsContext.Provider>
    </div>
  );
}

export default A