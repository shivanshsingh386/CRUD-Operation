import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

function Create1() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://656d9d35bcc5618d3c238d6e.mockapi.io/Crud_operation', {
            e_name: name,
            e_age: age,
            e_email: email

        }).then(()=>{
            navigate('/');
        })
    }
    return (

        <>
            <div className="row">
                <div className='col-md-4'>
                <div className='mb-2 mt-2'>
                  <Link to='/'>
                  <button className='btn btn-primary'>Read Data</button> 
                  </Link>
                  
                </div>
                    <div className='bg-primary p-4 text-center'>
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={handleSubmit} className='was-validated' >
                        <div className='form-group'>
                            <label>Enter Name:</label>
                            <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className='form-group'>
                            <label>Enter Age:</label>
                            <input type='number' placeholder='Age' className='form-control' onChange={(e) => setAge(e.target.value)} required />
                        </div>

                        <div className='form-group'>
                            <label>Enter email:</label>
                            <input type='email' placeholder='Email' className='form-control' onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Submit' className='btn btn-primary' />
                        </div>
                    </form>
                  
                </div>
            </div>
        </>
    )
}

export default Create1