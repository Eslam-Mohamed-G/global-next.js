'use client'
import { useSidebar } from '@/context/SidebarContext';
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

const TransformLayout = ({ children }: Props) => {
    const { isOpen, setIsOpen } = useSidebar();

    return (
        <div className={`h-screen ${isOpen ? 'custom-3d-transform' : 'remove-3d-transform'}`} onClick={()=>{setIsOpen(!isOpen)}}>
            {children}
        </div>
    );
};

export default TransformLayout;
