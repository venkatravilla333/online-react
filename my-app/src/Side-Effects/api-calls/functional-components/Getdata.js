import React, { useEffect, useState } from 'react'

function Getdata() {
 var [loading, setLoading] = useState(false)
 var [data, setData] = useState([])
 var [error, setError] = useState('')
  console.log('render')

  useEffect(() => {
    console.log('effect called')
    setTimeout(() => {
      setLoading(true)  
    }, 4000)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      return res.json()
      }).then((res) => {
        console.log(res)
        setTimeout(() => {
           setLoading(false);
           setData(res);
        }, 6000)
       
      }).catch((err) => {
        setLoading(false)
        setError(err)
        console.log(err)
      
    })
    
  }, [])

  // function getData() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then((res) => {
  //       return res.json()
  //       }).then((res) => {
  //         console.log(res)
  //         setData(res)
  //     })
  // }
  return (
    <div>
      {
        loading ? <h4>Loading</h4> : error ? <h4>{error}</h4> :
          data.map((obj) => {
            return <p>{obj.id}. {obj.title}</p>
            
          })
      }
      {/* {
        data.map((obj) => {
          return <p>{obj.userId}</p>
        })
      } */}
      {/* <button onClick={getData}>get data</button> */}
      
    </div>
  )
}

export default Getdata