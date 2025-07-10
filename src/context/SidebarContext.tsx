'use client';

import { ReactNode, createContext, useContext, useState } from "react";

type SidebarContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const sidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <sidebarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </sidebarContext.Provider>
    )
}

export const useSidebar = () => {
    const context = useContext(sidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within SidebarProvider");
    }
    return context;
};