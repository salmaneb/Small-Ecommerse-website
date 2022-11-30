import react, { useState } from 'react';
import { signup } from '../redux/loginSlice';
import {useDispatch} from 'react-redux';
function Register(){
    let[name,setName]=useState('');
    let[password,setPassword]=useState('');
    let[email,setEmail]=useState('');
    let dispatch=useDispatch();
    const handle=()=>{
        dispatch(signup({name,password,email}));
    }
  return(
    <>
    <div className='d-flex flex-column'>
      <form>
        <label>name</label>
        <input type='text' value={name} onChange={e=>setName(e.target.value)} />
        <label>password</label>
        <input type='text' value={password} onChange={e=>setPassword(e.target.value)} />
        <label>email</label>
        <input type='text' value={email} onChange={e=>setEmail(e.target.value)} />
        <button onClick={handle}>Register</button>
      </form>
      </div>
    </>
  );
}
export default Register;