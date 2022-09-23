import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from '../Service/Service';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableApoinment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null)

  const formattedDate = format(date, 'PP')

  const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)

    .then(res => res.json())

  )


  if (isLoading) {
    return <Loading />
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)

  //     .then(res => res.json())
  //     .then(data => setServices(data))
  // },)

  return (
    <div className='max-w-7xl sm:min-w-sm mx-auto px-12 mb-28'>
      <h4 className='text-xl text-secondary text-center'>Available Appointment On {format(date, 'PP')}</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services?.map(service => <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>)
        }

      </div>
      {treatment && <BookingModal
        date={date}
        treatment={treatment}
        setTreatment={setTreatment}
        refetch={refetch}
      ></BookingModal>}
    </div>
  );
};

export default AvailableApoinment;