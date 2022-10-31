import React from 'react';

export const SelectTimeframe = ({onTimeframeSelected}) => {
    const selectDay = ['yesterday', 'today', 'tomorrow'];

    return (
        <>
            <h2>Please select a timeframe</h2>
            <div className="grid">
                {selectDay.map((timeframes) => (
                    <button key={timeframes} className="timeframes" 
                    onClick={() => onTimeframeSelected(timeframes)} style={{ textTransform: "capitalize" }}>{timeframes}</button>
                ))
                }
            </div>
        </>
    )
}