import React from 'react'
import './VerifyPage.css'
import { useParams } from 'react-router-dom';

const VerifyPage = () => {
    const params = useParams();
  return (
    <div className='VerifyPage'>
        <button className='VerifyPageBtn'>Verify</button>
        {/* <p>User ID: {params.id}</p> */}
    </div>
  )
}

export default VerifyPage