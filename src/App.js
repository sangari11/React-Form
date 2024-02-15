import React, { useState } from "react";
import { useForm } from 'react-hook-form'  
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

 const style = {
    formControl: {
      width: { md: "18%", sm: "35%", xs: "25%" },
      m: 2,
      fontFamily: 'News Cycle'
    },
    label: {
      color: '#000',
      fontWeight: 700,
      '&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
        color: "#000",
        fontSize: '20px',
        fontFamily: 'News Cycle'
      }
    },
    inputFiled: {
      color: '#000',
      background: "#FFFFFF",
      border: '1px solid #6ca0dc',
      borderradius: '8px',
      boxshadow: 'rgb(0 0 8px #6ca0dc)',
      fontSize: '20px',
      fontFamily: 'News Cycle'
    }
  };
  let renderCount = -1;
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().integer().positive().required(),
    password: yup.string().required().min(4).max(15),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null])
  
   })

  //  const inputFields=[
  //   {
  //     name:'firstName',
  //     placeHolder:'First Name',
  //     required:true
      
  //   },
  //   {
  //     name:'lastName',
  //     placeHolder:'Last Name',
  //     required:false
  //   },
  //   {
  //     name:'email',
  //     placeHolder:'Email',
  //     required:true
  //   },
  //   {
  //     name:'age',
  //     placeHolder:'Age',
  //     required:true
  //   },
  //   {
  //     name:'password',
  //     placeHolder:'Password',
  //     required:true
  //   },
  //   {
  //     name:'confirmPassword',
  //     placeHolder:'Confirm Password',
  //     required:true
  //   }
  //  ]
function App() {
  const {register, handleSubmit,watch, formState: {errors, isValid},  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
 renderCount++;

 
  return (
    <>
      <Box style={{ backgroundColor: '#85beff48', width:'100%',height:'94.7vh',display:'flex',justifyContent:'center',alignItems:'center' }}>
       
        <Box style={{ backgroundColor: 'pink', /* marginLeft: '35%', marginRight: '30%', marginTop: '5%' */width:'30%',/* height:'75vh' */}}>
          <h1><center>SIGN UP</center></h1>
          <form onSubmit={handleSubmit((data)=>{
             console.log(data) 
          })}>
          <h1><center>{renderCount} times rendered</center></h1>
          {/* {inputFields.map(array=>(
            <>
            <input {...register(array.name)} placeholder={array.placeHolder} required= {array.required}  style={{...style.label, ...style.inputFiled, ...style.formControl,marginLeft:'30%',marginTop:'7%',height:'40px'}}/><br/>
           
            </>
          ))}
          <input type="submit" style={{...style.label, ...style.inputFiled, ...style.formControl,marginLeft:'43%',marginTop:'7%',height:'30px',width:'100px'}}/><br/>  */}
           <input {...register('firstName')} placeholder="First Name" required  style={{...style.label, ...style.inputFiled, ...style.formControl,marginLeft:'30%',marginTop:'7%',height:'40px'}}/><br/>
         {/* {errors.firstName && <p style={{marginLeft:'40%',fontWeight:'bold'}}>{errors.firstName.message}</p>} */}
          <input {...register('lastName')}  placeholder="Last Name"required   style={{...style.label, ...style.inputFiled, ...style.formControl,marginLeft:'30%',marginTop:'3%',height:'40px'}}/><br/>
         {/* {errors.lname && <p style={{marginLeft:'40%',fontWeight:'bold'}}>{errors.lname.message}</p>} */}
         <input {...register('email')}required placeholder="Email"   style={{...style.label, ...style.inputFiled, ...style.formControl,marginLeft:'30%',marginTop:'3%',height:'40px'}}/><br/>
         {errors.email && <p style={{marginLeft:'40%',fontWeight:'bold'}}>{errors.email.message}</p>}
        
         <input {...register('age')}required placeholder="Age"   style={{...style.label, ...style.inputFiled, ...style.formControl,marginLeft:'30%',marginTop:'3%',height:'40px'}}/><br/>
         <input {...register('password')}required type="password" placeholder="Password"   style={{...style.label, ...style.inputFiled, ...style.formControl,marginLeft:'30%',marginTop:'3%',height:'40px'}}/><br/>
         <input {...register('confirmPassword')} required type="password" placeholder="Confirm Password"   style={{...style.label, ...style.inputFiled, ...style.formControl,marginLeft:'30%',marginTop:'3%',height:'40px'}}/><br/>
         {errors.confirmPassword && <p style={{marginLeft:'30%',fontWeight:'bold'}}>{errors.confirmPassword.message}</p>}

          <input type="submit" /* disabled={!isValid} */ style={{...style.label, ...style.inputFiled, ...style.formControl,marginLeft:'43%',marginTop:'7%',height:'30px',width:'100px'}}/><br/> 
         
        </form>
        </Box>
       
      </Box>
      </>

  );
}

export default App;
//validation is properly manages not needed in value onchanges method...and more than field inclueds time we added in schema, and easy to add in required,watch,register, error collection