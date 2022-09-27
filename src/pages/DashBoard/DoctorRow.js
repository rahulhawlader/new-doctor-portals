import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
 const { name, specialty, img, email } = doctor;

 //  const handleDelete = email => {
 //   fetch(`https://still-springs-71384.herokuapp.com/doctor/${email}`, {
 //    method: "delete",
 //    headers: {
 //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`

 //    }
 //   })

 //    .then(res => res.json())
 //    .then(data => {
 //     if (data.deletedCount) {
 //      toast.success(`doctore: ${name} is deleted.`)
 //      refetch()
 //     }
 //    })

 //  }


 return (
  <tr>
   <th>{index + 1}</th>
   <td><div class="avatar">
    <div class="w-20 rounded">
     <img src={img} alt={name} />
    </div>
   </div></td>
   <td>{name}</td>
   <td>{specialty}</td>
   <td>
    <label onClick={() => setDeletingDoctor(doctor)} for="delete-confarm-modal" class="btn btn-xs btn-error">Delete</label>
   </td>
  </tr>
 );
};

export default DoctorRow;