import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Fields/Input';
import Select from '../../components/Fields/Select';
import Button from '../../components/Fields/Button';
import ErrorLabel from '../../components/Fields/ErrorLabel';

import * as S from './RegisterForm.styled';

import actionTypes from '../../store/constants/actionTypes';

const RegisterForm = ({ handleSuccess }) => {
  const schema = yup.object().shape({
    first_name: yup.string().required('Please, enter the first name'),
    last_name: yup.string().required('Please, enter the last name'),
    city_id: yup.string().required('Please, select the city'),
    email: yup.string().required('Please, enter the email'),
    password: yup.string().required('Please, enter the password'),
    confirm_password: yup.string().oneOf([yup.ref('password')], 'Password does not match'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [userErrors, setUserErrors] = useState(null);

  const dispatch = useDispatch();

  const history = useHistory();

  const onSubmit = (data) => {
    dispatch({
      type: actionTypes.REGISTER_USER_REQUEST,
      payload: data,
      callbacks: {
        onSuccess: () => {
          handleSuccess();

          history.push('/');
        },
        onFailure: (errors) => {
          setUserErrors(errors);
        },
      },
    });
  };

  const [cities, setCities] = useState([]);

  useEffect(() => {
    dispatch({
      type: actionTypes.LOAD_CITIES_REQUEST,
      callbacks: {
        onSuccess: (cities) => {
          setCities(cities);
        },
      },
    });
  }, []);

  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Register</S.Title>
        {userErrors && <ErrorLabel center>{userErrors.join(', ')}</ErrorLabel>}
        <S.Row>
          <Input name="first_name" ref={register} type="text" fullWidth={true} placeholder="First name" />
        </S.Row>
        {errors.first_name && <ErrorLabel>{errors.first_name.message}</ErrorLabel>}
        <S.Row>
          <Input name="last_name" ref={register} type="text" fullWidth={true} placeholder="Last name" />
        </S.Row>
        {errors.last_name && <ErrorLabel>{errors.last_name.message}</ErrorLabel>}
        <S.Row>
          <Select name="city_id" ref={register} fullWidth={true}>
            <option value="">Select city...</option>
            {cities.map((city, index) => (
              <option key={index} value={city.id}>
                {city.name}
              </option>
            ))}
          </Select>
        </S.Row>
        {errors.city_id && <ErrorLabel>{errors.city_id.message}</ErrorLabel>}
        <S.Row>
          <Input name="email" ref={register} type="text" fullWidth={true} placeholder="Email" />
        </S.Row>
        {errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
        <S.Row>
          <Input name="password" ref={register} type="password" fullWidth={true} placeholder="Password" />
        </S.Row>
        {errors.password && <ErrorLabel>{errors.password.message}</ErrorLabel>}
        <S.Row>
          <Input
            name="confirm_password"
            ref={register}
            type="password"
            fullWidth={true}
            placeholder="Confirm password"
          />
        </S.Row>
        {errors.confirm_password && <ErrorLabel>{errors.confirm_password.message}</ErrorLabel>}
        <S.Row>
          <Button fullWidth={true}>Register</Button>
        </S.Row>
      </form>
    </S.Container>
  );
};

export default RegisterForm;
