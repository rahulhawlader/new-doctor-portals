import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfarmation = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
  const { name, email } = deletingDoctor;


  const handleDelete = () => {
    fetch(`https://still-springs-71384.herokuapp.com/doctor/${email}`, {
      method: 'DELETE',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`

      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} is deleted.`)
          setDeletingDoctor(null)
          refetch()
        }
      })
  }

  return (
    <div>




      <input type="checkbox" id="delete-confarm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-red-600 text-lg">are you sure you went to delete ${name}</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
            <label for="delete-confarm-modal" class="btn btn-xs">cancle!</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfarmation;
