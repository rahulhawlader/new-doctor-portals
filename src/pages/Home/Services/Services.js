import React from 'react';
import flurite from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
 const services = [
  {
   _id: 1,
   name: 'Fluoride Treatment',
   description: "",
   img: flurite
  },
  {
   _id: 2,
   name: 'cavity Fellings',
   description: "",
   img: cavity
  },
  {
   _id: 1,
   name: ' teeth whitinig',
   description: "",
   img: whitening
  },
 ]
 return (
  <div className='my-28 '>
   <div className='text-center'>

    <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
    <h2 className='text-4xl'>Services to provide</h2>
   </div>

   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {
     services.map(service => <Service
      key={service._id}
      service={service}
     ></Service>)
    }
   </div>
  </div>
 );
};

export default Services;