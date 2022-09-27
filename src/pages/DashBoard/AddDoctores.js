import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddDoctores = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();


  const { data: services, isLoading } = useQuery('services', () => fetch('https://still-springs-71384.herokuapp.com/service').then(res => res.json()))


  const imgStorageKey = '0f96bdec33a2f815d1d27f267732480c'


  const onSubmit = async (data) => {
    const formData = new FormData();
    const image = data.image[0];

    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData

    })

      .then(res => res.json())
      .then(result => {
        // console.log('imgbb', result);
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img
          }
          fetch('https://still-springs-71384.herokuapp.com/doctor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.insertedId) {
                toast.success('Doctor added successfully')
                reset()

              }
              else {
                toast.error('Failed to add the doctor');
              }
            })
          fetch('https://still-springs-71384.herokuapp.com/doctor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.insertedId) {
                toast.success('Doctor added successfully')
                reset()

              }
              else {
                toast.error('Failed to add the doctor');
              }
            })




        }

      })
    console.log('data', data);
    // navigate("/appoinment")

  };


  if (isLoading) {
    return <Loading />
  }


  return (
    <>
      <h1 className='text-xl  text-black font-bold'>Add a new doctor</h1>
      <div className='flex h-screen  justify-center items-center'>


        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">

            <form onSubmit={handleSubmit(onSubmit)} >
              <div className='bg-black'>



                <div className="form-control  w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Your Name</span>

                  </label>
                  <input type="text"

                    placeholder="your Name "
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {

                      required: {
                        value: true,
                        message: "name is required"
                      },

                    })}
                  />
                  <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>

                  </label>
                  <input type="email"

                    placeholder="your email "
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {

                      required: {
                        value: true,
                        message: "email is required"
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a Valid Email' // JS only: <p>error message</p> TS only support string
                      }
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Specialty</span>
                  </label>
                  <select {...register('specialty')} class="select input-bordered w-full max-w-xs">
                    {
                      services.map(service => <option
                        key={service._id}
                        value={service.name}
                      >{service.name}</option>)
                    }
                  </select>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    className="input input-bordered w-full max-w-xs"
                    {...register("image", {
                      required: {
                        value: true,
                        message: 'Image is Required'
                      }
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                  </label>
                </div>




                <input className='btn w-full max-w-xs text-white' type="submit" value="ADD" />

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctores;