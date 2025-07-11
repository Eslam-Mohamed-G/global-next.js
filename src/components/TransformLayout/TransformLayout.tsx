'use client'
import { useSidebar } from '@/context/SidebarContext';
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

const TransformLayout = ({ children }: Props) => {
    const { isOpen } = useSidebar();

    return (
        <div className={isOpen ? 'custom-3d-transform' : 'remove-3d-transform h-screen'}>
            {children}
        </div>
    );
};

export default TransformLayout;
