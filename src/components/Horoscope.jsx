import React from "react"
import { useEffect, useState } from "react"
import { getHoroscope } from "../services/api";

export const Horoscope = ({ sign, timeframe }) => {
    const [horoscope, setHoroscope] = useState([]);
 
    useEffect(() => {
        getHoroscope(sign, timeframe).then(setHoroscope);
    }, [sign, timeframe]);
    
    return (
        <div>
            <img 
                src={`images/${sign}.png`} 
                key={sign} 
                alt={sign} 
                width="150"
                />
            <h2><span>{timeframe}'s</span> horoscope for 
            <span> {sign}</span>:</h2>
            <p>{horoscope}</p>
            <sub>- &copy; Kelli Fox, The Astrologer, http://new.theastrologer.com</sub>
        </div>
    )

}