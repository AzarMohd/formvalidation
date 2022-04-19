import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  
  const { register, handleSubmit, watch,reset,trigger, formState: { errors } } = useForm();
  
  const onSubmit=(data)=>{
      console.log(data);
      reset();
  }
   console.log(watch())
  
  return (
    <div className='bg'>

    <div className="container pt-5">
      <div className=' row justify-content-sm-center pt-5'>
        <div className='contain col-sm-5 shadow round pb-3'>
          <h1 className='header  pt-3 text-center'>Sign in</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
              <label className='form col-form-label'>Name</label>
              <input type="text" className={`form-control && ${errors.name && "invalid"} `}
              {...register("name", { required: 'Name is Recquired' ,
              minLength: {
                value: 8,
                message: 'Minimum recquired length is 08' },
                maxLength : {
                  value:25,
                  message: 'Maximum recquired length is 15' }
                    })}
                    onKeyUp={()=>{
                      trigger("name")
                    }} placeholder="Enter name" />
              {errors.name && <small className="form-text text-danger">{errors.name.message}</small> }
            </div>
            <div className="form-group">
              <label className='form col-form-label'>Age</label>
              <input type="text" className={`form-control && ${errors.age && "invalid"} `}ame
               {...register("age", {required:"Age is recquired",
                min: {
                value: 18,
                message: 'Minimum age is not allowed' },
                max : {
                  value: 65,
                  message: 'Maximum age is not allowed' },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'only numbers are allowed' }
                  })} 
                  onKeyUp={()=>{
                    trigger("age")
                  }} placeholder="Enter age" />
               {errors.age && <small className="form-text text-danger">{errors.age.message}</small>}
            </div>
            <div className="form-group">
              <label className='form col-form-label'>Phone number</label>
              <input type="number" className={`form-control && ${errors.number && "invalid"} `}ame 
               {...register("number", {required: 'Phone number is Recquired',
               pattern: {
                value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: '10 digits are allowed' }})}
                onKeyUp={()=>{
                  trigger("number")
                }} placeholder="Enter number" />
               {errors.number && <small className="form-text text-danger">{errors.number.message}</small>} 
            </div>
            <div className="form-group">
              <label className='form col-form-label'>Email address</label>
              <input type="email" className={`form-control && ${errors.email && "invalid"} `}ame 
               {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: 'Invalid email address' }})}
                  onKeyUp={()=>{
                    trigger("email")
                  }}placeholder="Enter email" />
               {errors.email && <small  className=" text-danger">{errors.email.message}</small>}
              
            </div>
            <div className="form-group">
              <label className="form col-form-label">Password</label>
              <input type="password" className={`form-control && ${errors.password && "invalid"} `}ame 
               {...register("password", {
                pattern: {
                  value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message: 'Invalid password'}})} 
                  onKeyUp={()=>{
                    trigger("password")
                  }}placeholder="Password" />
               {errors.password && <small className="form-text text-danger">{errors.password.message}</small>}
              </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
