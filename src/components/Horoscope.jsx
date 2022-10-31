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
            <h2><span style={{ textTransform: "capitalize" }}>{timeframe}</span>, your horoscope for <span style={{ textTransform: "uppercase" }}>{sign}</span> will be:</h2>
            <p>
                {horoscope}
                </p>
        </div>
    )

}