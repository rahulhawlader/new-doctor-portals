import React from 'react'

import appoinment from '../../../assets/images/appointment.png'
import doctorImg from '../../../assets/images/doctor.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const MakeAppoinment = () => {
 return (
  <section style={{
   background: `url(${appoinment}`

  }} className='flex justify-center items-center mt-20 '>
   <div className='flex-1 hidden lg:block'>
    <img className='mt-[-150px]' src={doctorImg} alt="" />
   </div>
   <div className='flex-1 px-5'>
    <h3 className='text-xl text-secondary'>Apporment</h3>
    <h2 className='text-3xl text-white py-5'>Make an Apporment Today</h2>
    <p className='text-white pb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ullam ipsa dolores soluta quisquam, vero tenetur voluptatibus, sed animi maxime repellat praesentium suscipit eos quia nostrum. Velit fugiat dignissimos tenetur?</p>
    <PrimaryButton>Get Start</PrimaryButton>
   </div>
  </section>
 );
};

export default MakeAppoinment;