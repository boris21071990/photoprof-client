import React from 'react';

import * as S from './HeaderGuest.styled';

import LoginForm from '../../containers/LoginForm';
import RegisterForm from '../../containers/RegisterForm';

import Modal, { useModal } from '../../components/Modal';

const HeaderGuest = () => {
  const { isOpen: isLoginOpen, toggleIsOpen: toggleIsLoginOpen } = useModal();
  const { isOpen: isRegisterOpen, toggleIsOpen: toggleIsRegisterOpen } = useModal();

  return (
    <S.Container>
      <S.LoginButton onClick={toggleIsLoginOpen}>Login</S.LoginButton>
      <Modal isOpen={isLoginOpen} toggleIsOpen={toggleIsLoginOpen}>
        <LoginForm handleSuccess={toggleIsLoginOpen} />
      </Modal>
      <S.RegisterButton onClick={toggleIsRegisterOpen}>Register</S.RegisterButton>
      <Modal isOpen={isRegisterOpen} toggleIsOpen={toggleIsRegisterOpen}>
        <RegisterForm handleSuccess={toggleIsRegisterOpen} />
      </Modal>
    </S.Container>
  );
};

export default HeaderGuest;
