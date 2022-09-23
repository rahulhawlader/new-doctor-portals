import React from 'react';
import tretment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const BennerTwo = () => {
 return (
  <div className="hero min-h-screen text-black max-w-7xl sm:min-w-sm mx-auto px-12">
   < div className="hero-content flex-col lg:flex-row" >
    <img src={tretment} className="max-w-sm rounded-lg shadow-2xl w-auto" alt='tretment' />
    <div>
     <h1 className="text-5xl font-bold">Box Office News!</h1>
     <p className="py-6" > Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.</p >
     <PrimaryButton>Get Start</PrimaryButton>
    </div >
   </div >
  </div >
 );
};

export default BennerTwo;