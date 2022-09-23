import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const Benner = () => {
 return (
  <div>
   <div className="hero min-h-screen bg-white max-w-7xl sm:min-w-sm mx-auto px-12">
    <div className="hero-content flex-col lg:flex-row-reverse">
     <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='chire' />
     <div className='text-black'>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton>Get Start</PrimaryButton>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Benner;