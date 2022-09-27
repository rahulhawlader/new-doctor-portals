import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteConfarmation from './DeleteConfarmation';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
 const [deletingDoctor, setDeletingDoctor] = useState(null)


 const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://still-springs-71384.herokuapp.com/doctor', {
  headers: {
   'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  }
 }).then(res => res.json()));
 if (isLoading) {
  return <Loading></Loading>
 }

 return (
  <div>
   <h1 className='text-xl  text-black font-bold'>Manage all Doctor:- {doctors.length}</h1>

   <div class="overflow-x-auto">
    <table class="table w-full">

     <thead>
      <tr>
       <th></th>
       <th>avatar</th>
       <th>Name</th>
       <th>Specialty</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>

      {
       doctors.map((doctor, index) => <DoctorRow
        key={doctor._id}
        doctor={doctor}
        index={index}
        refetch={refetch}
        setDeletingDoctor={setDeletingDoctor}

       ></DoctorRow>)
      }


     </tbody>
    </table>
   </div>


   {
    deletingDoctor && <DeleteConfarmation

     deletingDoctor={deletingDoctor}
     refetch={refetch}
     setDeletingDoctor={setDeletingDoctor}
    ></DeleteConfarmation>
   }

  </div>
 );
};

export default ManageDoctor;