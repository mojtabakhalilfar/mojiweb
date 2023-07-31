import React from 'react'
import Layout from '../../Layout/Layout'
import {AiOutlineClose} from "react-icons/ai"
import {GrFormNext , GrFormPrevious} from "react-icons/gr"

const Users = () => {
  return (
   <Layout>
      <div className='w-full flex flex-col'>
        <div className='bg-green-700 rounded-lg flex items-center h-12 text-white'>
          <div className='pr-4'><AiOutlineClose className='font-bold'/></div>
          <p className='text-center w-full'>این یک پیام موفقیت آمیز است.</p>
        </div>
        <div className='flex justify-between items-center mx-4 mt-4 h-16'>
          <span className='font-bold'>کاربران</span>
          <div>
            <input placeholder='نام' className='rounded-lg py-3 border-2 border-fuchsia-200 focus:outline-none focus:border-fuchsia-500 pr-4'/>
            <button className='ml-4 py-3 px-6 bg-fuchsia-500 rounded-lg'>فیلتر</button>
          </div>
        </div>
        <div className='mt-16'>
          <table className='w-full border-collapse border border-slate-400 bg-white rounded-lg text-center'>
            <thead className='border-collapse border border-slate-400'>
              <tr>
                <th colSpan={2}>کاربر</th>
                <th colSpan={1}>نقش</th>
                <th colSpan={1}>ایجاد شده در</th>
                <th colSpan={1}>وضعیت</th>
                <th colSpan={1}>اقدامات</th>
              </tr>
            </thead>
            <tbody className='border-collapse border border-slate-400'>
              <tr>
                <td colSpan={2}>
                  <div>
                  <img src='' alt='' />
                  <span>مجتبی خلیلفر</span>
                  </div>
                </td>
                <td colSpan={1}>ادمین</td>
                <td colSpan={1}>۱۴۰۲-۴-۳</td>
                <td colSpan={1}>فعال</td>
                <td colSpan={1}>اقدامات</td>
              </tr>
            </tbody>
          </table>
          <div className='w-full bg-white flex justify-center h-16'>
                  <div className='my-2'>
                    <button className='py-3 px-1 border hover:bg-gray-100 rounded-r-lg'><GrFormNext/></button>
                  </div>
                  <div className='my-2'>
                    <button className='py-2 px-2 border hover:bg-gray-100'>1</button>
                  </div>
                  <div className='my-2'>
                    <button className='py-2 px-2 border hover:bg-gray-100'>2</button>
                  </div>
                  <div className='my-2'>
                    <button className='py-2 px-2 border hover:bg-gray-100'>3</button>
                  </div>
                  <div className='my-2'>
                    <button className='py-3 px-1 border hover:bg-gray-100 rounded-l-lg'><GrFormPrevious/></button>
                  </div>
          </div>
        </div>
      </div>
   </Layout>
  )
}

export default Users
