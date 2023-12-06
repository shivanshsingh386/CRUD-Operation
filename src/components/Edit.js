import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Edit() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));



    }, [])

    const handleUpdate = (e) => {

        e.preventDefault();
        axios.put(`https://656d9d35bcc5618d3c238d6e.mockapi.io/Crud_operation${id}`, {
            e_name: name,
            e_age: age,
            e_email: email

        }).then(() => {
            navigate('/');
        });
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
                        <h1>Update Data</h1>
                    </div>
                    <form className='was-validated' onSubmit={handleUpdate}>
                        <div className='form-group'>
                            <label for="validationCustom01" class="form-label">Enter Name:</label>
                            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='form-control' class="form-control" id="validationCustom02" required />
                        </div>
                        <div className='form-group'>
                            <label for="validationCustom01" class="form-label">Enter Age:</label>
                            <input type='number' placeholder='Age' className='form-control' required value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Enter email:</label>
                            <input type='email' placeholder='Email' className='form-control' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Update' className='btn btn-primary' />
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Edit