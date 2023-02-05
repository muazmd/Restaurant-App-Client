import React from 'react'
import './register.scss'
import { useForm } from 'react-hook-form';
// import { useRef } from 'react';
export const Register = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
const pass = '';
const repass =''; 
  const onSubmit = (data) => {
    console.log(data);
//     data.password!== data.repassword && 
//  console.log('error matching the passowrds')
  };
  

  return (
    <div className="Register">
      <form onSubmit={handleSubmit(onSubmit)} className='Register-form'>
      <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            name="Username"
            {...register('Username',{
              required: 'Username is required.',
              minLength: {
                value: 10,
                message: 'Username should be at-least 10 characters.'
              }
            })}
          />
          {errors.Username && (
            <p className="errorMsg">{errors.Username.message}</p> 
          )}
          
        </div>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="Name"
            {...register('Name',{
              required: 'Name is required.',
              minLength: {
                value: 10,
                message: 'Name should be at-least 10 characters.'
              }
            })}
          />
          {errors.Name && (
            <p className="errorMsg">{errors.Name.message}</p> 
          )}
          
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            {...register('email' 
            , {
                required: 'Email is required.',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is not valid.'
                }
              })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
          className="form-pass"
          // ref={pass}
          onChange={evt => {
            pass.current.value=evt.target.value;
            
          }}
            type="password"
            name="password"
            {...register('password',
            {
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'Password should be at-least 6 characters.'
              }
            }
       )}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p> 
          )}
          
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input
          // ref={repass}
          className="form-repass"

            type="password"
            // value={repass}
            name="repassword"
            {...register('repassword',{
              required: 'Please confirm the passowrd.',
              minLength: {
                value: 6,
                message: 'Password should be at-least 6 characters.'
              },
            
            })}
          />
         
          {pass.password!==repass.repassword && <p className='errorMsg'> passowrd and confirm passowrd should match</p> }
          {/* {console.log(pass.value,repass.value)} */}
        
        </div>
        <div className="form-control">
          <label>PhoneNo</label>
          <input
            type="PhoneNo"
            name="PhoneNo"
            {...register('PhoneNo',{
              required: 'PhoneNo is required.',
              pattern:{
                value:/^\(?(\d{2})\)?[- ]?(\d{3})[- ]?(\d{3})$/,
                message: 'Phone formate is not correct'
              }
              
            })}
          />
          {errors.PhoneNo && (
            <p className="errorMsg">{errors.PhoneNo.message}</p> 
          )}
          
        </div>
      
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
      {/* <div className="form-control">
          <label>Password</label>
          <input
          ref={pass}
          onChange={evt => {
            pass.current.value=evt.target.value;
            console.log(pass.current.value);
          }}
            type="password"
            name="password"
            // {...register('password',{
            //   required: 'Password is required.',
            //   minLength: {
            //     value: 6,
            //     message: 'Password should be at-least 6 characters.'
            //   }
            // })}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p> 
          )} */}
          
        {/* </div> */}
    </div>
  );
}
