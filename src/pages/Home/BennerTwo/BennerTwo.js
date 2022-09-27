import React from 'react';
import tretment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const BennerTwo = () => {
 return (
  <div className="hero min-h-screen max-w-7xl w-full text-black ">
   < div className="hero-content flex-col lg:flex-row" >
    <img src={tretment} className="w-96 rounded-lg shadow-2xl " alt='tretment' />
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