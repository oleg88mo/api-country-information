import React from 'react';
import CountryIco from '../../img/country.png';

export default function DetailName(p) {
    return (
        <div className="detail__name">
            <img src={CountryIco} alt="country"/>
            <h1>{p.name}</h1>
            (<h2>{p.nativeName}</h2>)
        </div>
    )
};
