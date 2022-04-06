import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [name, setName] = useState("");

    const [disabled, setDisabled] = useState(true);

    let navigate = useNavigate();

    const handleChange = (e) => {

        if (e.target.value.length >= 2) {

            setDisabled(false)
        }
        setName(e.target.value)
    }

    const handleClick = (name) => {
        navigate(`/country/${name}`)
    }
    return (
        <div>

            <div style={{ marginTop: '150px' }}>
                <div className="row">
                    <div className="col">
                        <div className='w-50 shadow  p-5 m-5 m-auto text-center ' >
                            <h3>Enter your country</h3><br />
                            <input onChange={handleChange} placeholder='Enter Country' className='form-control' type="text" /><br />
                            <button disabled={disabled} onClick={() => handleClick(name)} className='btn btn-danger'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;