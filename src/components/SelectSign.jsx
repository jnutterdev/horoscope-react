import React, { useEffect, useState } from 'react';
import { getSigns } from '../services/api';

export const SelectSign = ({onSignSelected}) => {
    const [signs, setSigns] = useState([])
    
    useEffect(() => {
        getSigns().then(setSigns);
      }, [])

    return (
        <>
            <h2>Please select a sign</h2>
            <div className="grid">
                {signs.map((sign) => (
                    <button key={sign} onClick={() => onSignSelected(sign)} style={{ textTransform: "capitalize" }}>{sign}</button>
                ))
                }
            </div>
        </>
    )
}