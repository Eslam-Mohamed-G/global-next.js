'use client'
import { useSidebar } from '@/context/SidebarContext';
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

const TransformLayout = ({ children }: Props) => {
    const { isOpen, setIsOpen } = useSidebar();

    const handleMenu = () => {
        if (isOpen) {
            setIsOpen(!isOpen)
        }
    }

    return (
        <div className={`h-screen ${isOpen ? 'custom-3d-transform cursor-pointer' : 'remove-3d-transform'}`} onClick={handleMenu}>
            {children}
        </div>
    );
};

export default TransformLayout;
