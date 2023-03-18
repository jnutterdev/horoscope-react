import React from "react"
import { useEffect, useState } from "react"

export const Horoscope = ({ sign, timeframe }) => {
    const [signs, setSigns] = useState([]);
    const [ description, setDescription ] = useState(null);
    const [ current_date, setCurrentDate ] = useState(null);

    useEffect(() => {
        const baseUrl = "https://aztro.sameerkumar.website/";
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}?sign=${sign}&day=${timeframe}`, requestOptions);
                const json = await response.json();
                setDescription(json.description);
                setCurrentDate(json.current_date);
                setSigns(sign, timeframe);
            } catch (error) {
              console.log("error", error);
            }
          };
        fetchData();
    }, []);
    
    return (
        <div>
            <img 
                src={`images/${sign}.png`} 
                key={sign} 
                alt={sign} 
                width="150"
                />
                <h2>{current_date}</h2>
            <h2><span>{timeframe}'s</span> horoscope for 
            <span> {sign}</span>:</h2>
            <p>{description}</p>
            <sub></sub>
        </div>
    )
}
