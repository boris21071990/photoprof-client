import React from 'react';

import { createPortal } from 'react-dom';

import * as S from './Modal.styled';

const Modal = ({ children, isOpen, toggleIsOpen }) => {
    if (!isOpen) {
        return null;
    }

    return createPortal(
        <S.Wrapper onClick={toggleIsOpen}>
            <S.Container onClick={e => e.stopPropagation()}>
                {children}
            </S.Container>
        </S.Wrapper>,
        document.body
    );
};

export default Modal;
