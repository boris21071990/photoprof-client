import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import Input from "../../components/Fields/Input";
import Button from "../../components/Fields/Button";
import ErrorLabel from "../../components/Fields/ErrorLabel";

import * as S from './RegisterForm.styled';

const RegisterForm = () => {
    const schema = yup.object().shape({
        email: yup.string().required('Please, enter the email'),
        password: yup.string().required('Please, enter the password'),
        confirm_password: yup.string().oneOf([yup.ref('password')], 'Password does not match')
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <S.Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <S.Title>Register</S.Title>
                <S.Row>
                    <Input
                        name='email'
                        ref={register}
                        type='text'
                        fullWidth={true}
                        placeholder='Email'
                    />
                </S.Row>
                {errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
                <S.Row>
                    <Input
                        name='password'
                        ref={register}
                        type='password'
                        fullWidth={true}
                        placeholder='Password'
                    />
                </S.Row>
                {errors.password && <ErrorLabel>{errors.password.message}</ErrorLabel>}
                <S.Row>
                    <Input
                        name='confirm_password'
                        ref={register}
                        type='password'
                        fullWidth={true}
                        placeholder='Confirm password'
                    />
                </S.Row>
                {errors.confirm_password && <ErrorLabel>{errors.confirm_password.message}</ErrorLabel>}
                <S.Row>
                    <Button fullWidth={true}>
                        Register
                    </Button>
                </S.Row>
            </form>
        </S.Container>
    );
};

export default RegisterForm;
