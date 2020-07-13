import { useState } from 'react';

const useModal = (initialIsOpen = false) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    return {
        isOpen,
        toggleIsOpen
    };
};

export default useModal;
