import React from "react"
import { useEffect, useState } from "react"
import { getHoroscope } from "../services/api";


export const Horoscope = ({ sign, timeframe }) => {
    const [horoscope, setHoroscope] = useState([]);
    const stringCopy = horoscope.toString().split("(c)");
    
    console.log(stringCopy[1]);

    const formattedCopy = `<sub> &copy; ${stringCopy[1]}</sub>`
    console.log(formattedCopy)

    useEffect(() => {
        getHoroscope(sign, timeframe).then(setHoroscope);
    }, [sign, timeframe]);
    
    
    return (
        <div>
            <h2><span style={{ textTransform: "capitalize" }}>{timeframe}</span>, your horoscope for <span style={{ textTransform: "uppercase" }}>{sign}</span> will be:</h2>
            <p>
                {stringCopy[0] + formattedCopy}
                </p>
        </div>
    )

}