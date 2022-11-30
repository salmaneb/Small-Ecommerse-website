import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SingUp(){
    let[singUp,setSingUp]=useState({
        name:'',
        email:'',
        password:'',
        confirmPass:''

    });
    let[record,setRecord]=useState([]);
    let navigate=useNavigate();
    let {name}=useParams();
    const handle=(e)=>{
        setSingUp({...singUp,[e.target.name]:e.target.value});
    }
    const sign=()=>{
        let newValue={...singUp};
        setRecord([...record,newValue]);
        navigate('/');
    }
let products=products.find(p=>p.id === useParams.id)
    return(
        <>
           <section class="vh-100" style={{backgroundColor: "#eee;"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px;"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form classNameclass="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" name="name" value={singUp.name} onChange={handle}/>
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" name="email" value={singUp.email} onChange={handle}/>
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" name="password" value={singUp.password} onChange={handle}/>
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control"value={singUp.confirmPass} name='confirmPass' onChange={handle}/>
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg" onClick={sign}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 

<br /><br />
<div>

{
    record.map(user =>{
        return(
            <div>
                <p>{singUp.name}</p>
                <p>{singUp.email}</p>
                <p>{singUp.password}</p>
                <p>{singUp.confirmPass}</p>
            </div>
        )
    })
}

</div>

        </>
    )
}
export default SingUp;