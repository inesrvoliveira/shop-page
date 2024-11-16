'use client';
import React from 'react';

const NavCategory = ({ name, displayName }: { name:string, displayName: string }) => {

    const scrollToSection = () => {
        const targetSection = document.getElementById(name);
        if (targetSection) {
            // Scroll the element into view
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div>
            <button className='btn btn-ghost btn-square indicator' onClick={scrollToSection}>{displayName}</button>
        </div>
    )
}

export default NavCategory