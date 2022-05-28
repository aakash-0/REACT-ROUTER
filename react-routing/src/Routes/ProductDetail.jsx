import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
 

function ProductDetail() {
    const [loading,setLoading] = useState(false);
    const[data,setData] = useState([]);
    const params = useParams();
    const { id } = params;
    useEffect(()=>{
        setLoading(true);
        
        axios({
            url:`http://localhost:3004/data/${id}`,
            method:"GET"
        }).then((res)=>{
            setData(res.data);
            setLoading(false)
        }).catch((err)=>{
            console.log(err);
        })

    },[])
    console.log(params);
  return (<>
    {loading && <div>loading...</div>}
    
    <div className='table-div'>
            <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
            
        </tr>
        {
        
        <tr>
            <td>{data.name}</td>
            <td>{data.price}</td>
        </tr>
           }
        
        </table>

        </div>

    
  </>)
}

export default ProductDetail