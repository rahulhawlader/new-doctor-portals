import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmentBenner = ({ date, setDate }) => {
 return (
  <div className='text-black'>
   <div className="hero min-h-screen ">
    <div className="hero-content flex-col lg:flex-row-reverse">
     <img src={chair} className="w-96 rounded-lg shadow-2xl" alt='chire' />
     <div>
      <DayPicker

       mode="single"
       selected={date}
       onSelect={setDate}
      />
      <p></p>
     </div>
    </div>

   </div>
  </div>
 );
};

export default AppoinmentBenner;