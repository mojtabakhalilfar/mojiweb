import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const Login = () => {
    const schema=yup.object().shape({
        email:yup.string().required(),
        password:yup.string().required()
    })
    const {register , handleSubmit , formState:{errors}} = useForm({resolver:yupResolver(schema)})
    const validation=(data)=>{

    }
  return (
    <div className='h-screen w-screen overflow-hiden bg-gray-100 flex items-center justify-center'>
      <form onSubmit={handleSubmit(validation)} className='flex flex-col items-center justify-center py-40 px-32 bg-white rounded'>
        <h2 className='pb-4 mb-8 font-bold'>ورود</h2>
        <input className='w-64 h-12 border border-blue-500 focus:outline-none focus:border-blue-900 rounded pr-4 my-2'
         type='email' placeholder='ایمیل' {...register('email')}/>
         {errors.email && (<p>{errors.email?.message}</p>)}
        <input className='w-64 h-12 border border-blue-500 focus:outline-none focus:border-blue-900 rounded pr-4 my-2'
         type='password' placeholder='پسورد' {...register('password')}/>
         {errors.password && (<p>{errors.password?.message}</p>)}
        <input className='mt-4 border bg-blue-700 text-blue-100 py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-700' type='submit'/>
        <h2 className='mt-4'>حساب ندارید؟</h2>
        <Link className='text-blue-500' to={'/singin'}>ثبت نام</Link>
      </form>
    </div>
  )
}

export default Login
