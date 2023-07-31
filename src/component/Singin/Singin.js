import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'

const Singin = () => {
    const schema=yup.object().shape({
        name:yup.string().required("نام خود را وارد کنید"),
        family:yup.string().required("فامیلی خود را وارد کنید"),
        email:yup.string().email("ایمیل نامعتبر").required(""),
        password:yup.string().min(7).required("پسورد قوی وارد کنید"),
        confirmpassword:yup.string().required("").oneOf([yup.ref('password')],"پسوردها مطابقت ندارن")

    })

    const {register , handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schema)})
    const handleData=(data)=>{
      console.log(data)
    }
  return (
    <div className='w-screen h-screen overflow-hidden flex items-center justify-center bg-gray-100'>
        <form onSubmit={handleSubmit(handleData)} className='flex flex-col items-center justify-center px-48 py-16 bg-white rounded'>
             <h2 className='pb-4'>فرم ثبت نام</h2>
            <input className='w-64 h-12 border border-blue-500 focus:outline-none focus:border-blue-900 rounded pr-4 my-2'
             type='text' placeholder='نام' {...register('name')}/>
            {errors.name && (<p>{errors.name?.message}</p>)}
            <input className='w-64 h-12 border border-blue-500 focus:outline-none focus:border-blue-900 rounded pr-4 my-2'
             type='text' placeholder='نام خانوادگی' {...register('family')}/>
            {errors.family && (<p>{errors.family?.message}</p>)}
            <input className='w-64 h-12 border border-blue-500 focus:outline-none focus:border-blue-900 rounded pr-4 my-2'
             type='email' placeholder='ایمیل' {...register('email')}/>
            {errors.email && (<p>{errors.email?.message}</p>)}
            <input className='w-64 h-12 border border-blue-500 focus:outline-none focus:border-blue-900 rounded pr-4 my-2'
             type='password' placeholder='پسورد' {...register('password')}/>
            {errors.password && (<p>{errors.password?.message}</p>)}
            <input className='w-64 h-12 border border-blue-500 focus:outline-none focus:border-blue-900 rounded pr-4 my-2'
             type='password' placeholder='تایید پسورد' {...register('confirmpassword')}/>
            {errors.confirmpassword && (<p>{errors.confirmpassword?.message}</p>)}
            <input className='mt-4 border bg-blue-700 text-blue-100 py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-700' type='submit' />
            <h2 className='mt-4'>قبلا حساب ساخته اید؟</h2>
            <Link className='text-blue-500' to={'/login'}>ورود</Link>
        </form>
    </div>

  )
}

export default Singin
