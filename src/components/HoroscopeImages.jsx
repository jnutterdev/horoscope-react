import React from 'react';

export const HoroscopeImages = ({sign}) => {
    <img 
        src={`images/${sign}.png`} 
        key={sign} 
        alt={sign} 
        width="150"
        />
}