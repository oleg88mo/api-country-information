import React from 'react';

export default function DetailAreaAndPopulation(p) {
    return (
        <div className="detail__area">
            <span className="iterate">
                <span className="label">{p.name} area</span>: <b>{p.area}km<sup>2</sup></b>
            </span>
            <span className="iterate">
                <span className="label">Population:</span>
                <b>{p.population}</b>
            </span>
        </div>
    )
};
