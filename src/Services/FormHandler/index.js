import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormHandler() {
  const { handleSubmit, errors, control, watch, reset } = useForm({
    criteriaMode: 'all',
  });

  const [phone, setPhone] = useState();

  const [values, setVal] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    'confirm password': '',
    location: '',
    recipient: '',
    destination: '',
    weight: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({
      ...values,
      [name]: value,
    });
  };

  const resetInput = (e) => {
    setVal({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      'confirm password': '',
      location: '',
      destination: '',
      weight: '',
      recipient: '',
      status: '',
    });

    setPhone({
      phone: '',
    });
  };

  return {
    handleChange,
    handleSubmit,
    values,
    reset,
    resetInput,
    errors,
    Controller,
    phone,
    setPhone,
    watch,
    control,
  };
}

export default FormHandler;
