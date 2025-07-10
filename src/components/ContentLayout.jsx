import React from 'react';
import { useSidebar } from '../hooks/useSidebar';
import '../styles/components/ContentLayoutStyles.css';

const ContentLayout = ({ children, className = '', style = {} }) => {
    const { collapsed } = useSidebar();

    const contentLayoutClasses = [
        'content-layout',
        collapsed ? 'content-layout--collapsed' : 'content-layout--expanded',
        className
    ].filter(Boolean).join(' ');

    return (
        <main 
            className={contentLayoutClasses}
            style={style}
        >
            {children}
        </main>
    );
};

export default ContentLayout;
