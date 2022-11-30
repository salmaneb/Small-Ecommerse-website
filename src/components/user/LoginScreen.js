import { useState } from 'react'
//import { useForm } from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from '../../redux/userSlice';
const LoginScreen = () => {
    let {nomOfCkaes}=useSelector(store => store.user);
    let dispatch=useDispatch();
  const [login,setlogin]=useState({
    email:'',
    name:'',

  });

  const submitForm = () => {

  }
  function handle(e){
    setlogin({...login,[e.target.name]:e.target.value});
    
  }

  return (
    <form onSubmit={submitForm}>
      <div className='form-group'>
        <label >Email</label>
        <input
          type='email'
          name='email'
          className='form-input'
          onChange={handle}
          value={nomOfCkaes}
         
          required
        />
      </div>
      <div className='form-group'>
        <label>Name</label>
        <input
          type='text'
          className='form-input'
          onChange={handle}
          name='name'
          required
          value={login.name}
        />
      </div>
      <button type='submit' className='button' onClick={()=>dispatch(buyCake())}>
        Login
      </button>
    </form>
  )
}
export default LoginScreen