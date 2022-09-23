import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';

import AppoinmentBenner from '../AppoinmetBenner/AppoinmentBenner';
import AvailableApoinment from '../AvailableAppoinment/AvailableApoinment';

const Appoinement = () => {
 const [date, setDate] = useState(new Date());
 return (
  <div className='bg-white'>
   <AppoinmentBenner date={date} setDate={setDate} />
   <AvailableApoinment date={date} />
   <Footer />
  </div>
 );
};

export default Appoinement;