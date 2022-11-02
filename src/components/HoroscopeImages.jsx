import React from 'react';
import { Aquarius,
    Aries,
    Cancer,
    Capricorn,
    Gemini,
    Leo,
    Libra,
    Pisces,
    Sagittarius,
    Scorpio,
    Taurus,
    Virgo } from '../assets'

export const HoroscopeImages = () => {
    const imageMap = [
        {
        "Aquarius": "aquarius",
        "Aries": "aries",
        "Cancer": "cancer",
        "Capricorn": "capricorn",
        "Gemini": "gemini",
        "Leo": "leo",
        "Libra": "libra",
        "Pisces": "pisces",
        "Sagittarius": "sagittarius",
        "Scorpio": "scorpio",
        "Taurus": "taurus",
        "Virgo": "virgo",
        }
    ]
    const imageArray = [
        "Aquarius",
        "Aries",
        "Cancer",
        "Capricorn",
        "Gemini",
        "Leo",
        "Libra",
        "Pisces",
        "Sagittarius",
        "Scorpio",
        "Taurus",
        "Virgo",
    ]

   return (
    imageArray.map((img,index) => {
        <img 
            key={index} 
            src={img} 
            alt={img} 
        />
    })
   )
}