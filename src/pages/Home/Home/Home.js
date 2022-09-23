import React from 'react';
import Contact from '../../Contack/Contack';
import Footer from '../../Shared/Footer/Footer';
import Benner from '../Benner/Benner';
import BennerTwo from '../BennerTwo/BennerTwo';
import Info from '../Info/Info';
import MakeAppoinment from '../MakeAppointment/MakeAppoinment';
import Services from '../Services/Services';
import Testmonials from '../Testmonials/Testmonials';


const Home = () => {
 return (
  <div >
   <Benner />
   <Info />
   <Services />
   <BennerTwo />
   <MakeAppoinment />
   <Testmonials />
   <Contact />
   <Footer />
  </div>
 );
};

export default Home;