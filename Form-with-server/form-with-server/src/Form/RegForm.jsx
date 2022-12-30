import React from 'react'
import { useState } from 'react'

const RegForm = () => {
    const [values, setValues] = useState({
        name : "",
        email : "",
        mobile : "",
        password : "",
        re_password : ""
    })
    const [nameErr, setNameErr] = useState()
    const [emailErr, setEmailErr] = useState()
    const [mobileErr, setMobileErr] = useState()
    const [passwordErr, setPasswordErr] = useState()
    const [rePassword, setRePasswordErr] = useState()

    const captureFormValues = (e)=>{
        setValues({...values,[e.target.name] : e.target.value})
    }

    const validateForm = ()=>{
        let name = values.name
        let email = values.email
        let mobile = values.mobile
        let password = values.password
        let re_password = values.re_password
    }

    return (
        <>
            <div className="container mt-5">
                <pre>{JSON.stringify(values)}</pre>
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h1>Registration Form</h1>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input type="text" name='name' className="form-control" placeholder='Name' onChange={captureFormValues}/>
                                        <p className='text-danger'></p>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='email' className="form-control" placeholder='Email' onChange={captureFormValues}/>
                                        <p className='text-danger'></p>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" name='mobile' className="form-control" placeholder='Number' onChange={captureFormValues}/>
                                        <p className='text-danger'></p>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name='password' className="form-control" placeholder='Password' onChange={captureFormValues}/>
                                        <p className='text-danger'></p>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name='re_password' className="form-control" placeholder='Re-enter Password' onChange={captureFormValues}/>
                                        <p className='text-danger'></p>
                                    </div>
                                    <input type="submit" value="Register" className='btn btn-warning' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegForm
