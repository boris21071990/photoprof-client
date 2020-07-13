import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useHistory } from "react-router-dom";

import * as S from './LoginForm.styled';

import Input from "../../components/Fields/Input";
import Button from "../../components/Fields/Button";
import ErrorLabel from "../../components/Fields/ErrorLabel";

import actionTypes from "../../store/constants/actionTypes";

const LoginForm = ({ handleSuccess }) => {
    const schema = yup.object().shape({
        email: yup.string().required('Please, enter the email'),
        password: yup.string().required('Please, enter the password')
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const [userErrors, setUserErrors] = useState(null);

    const dispatch = useDispatch();

    const history = useHistory();

    const onSubmit = (data) => {
        dispatch({
            type: actionTypes.LOGIN_USER_REQUEST,
            payload: data,
            callbacks: {
                onSuccess: () => {
                    handleSuccess();

                    if (history.location.pathname == '/') {
                        dispatch({ type: actionTypes.LOAD_CURRENT_USER_REQUEST });
                    } else {
                        history.push('/');
                    }
                },
                onFailure: (errors) => {
                    setUserErrors(errors);
                }
            }
        });
    };

    return (
        <S.Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <S.Title>Login</S.Title>
                {userErrors && <ErrorLabel center>{userErrors.join(', ')}</ErrorLabel>}
                <S.Row>
                    <Input
                        ref={register}
                        name='email'
                        fullWidth={true}
                        type='text'
                        placeholder='Email'
                    />
                </S.Row>
                {errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
                <S.Row>
                    <Input
                        ref={register}
                        name='password'
                        fullWidth={true}
                        type='password'
                        placeholder='Password'
                    />
                </S.Row>
                {errors.password && <ErrorLabel>{errors.password.message}</ErrorLabel>}
                <S.Row>
                    <Button fullWidth={true}>
                        Login
                    </Button>
                </S.Row>
            </form>
        </S.Container>
    );
};

export default LoginForm;
