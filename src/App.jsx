// import {useEffect, useState} from 'react'
// import axios from 'axios';

// const App = () => {
//   const [text, setText] = useState("")
//   // console.log(text);

//   const getdata = async()=>{
//     const {data} = await axios.get("http://picsum.photos/v2/list")
//     // console.log(data);
//     setText(data)
//   }

//   useEffect(() => {
//     console.log(text);
  
//   }, [text])

//   return (
//     <>
//      {/* <input type="text" onChange={(e)=>setText(e.target.value)} /> */}
//      <input type="text" onChange={getdata} />
//     </>
//     )
// }
// export default App;

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [deta, setDeta] = useState([])

  const getdata = async()=>{
    const d = await axios.get("http://picsum.photos/v2/list")
    setData(d.data)
  }

  useEffect(() => {
   getdata()
  }, [])

  useEffect(() => {
    setDeta(data)
  }, [data])

  console.log(deta);  

  return (
    <>
     {deta.map((e,index)=>
     <div key={index}>
      <img src={e.download_url} alt="" height="250px" width="300px" />
      <h4>{e.author}</h4>
     </div>
     )}
    </>
  )
}

export default App