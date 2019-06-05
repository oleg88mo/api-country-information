import React from 'react';

export default function DetailCapital(p) {
    return (
        <div className="detail__capital">
            <span className="label">Capital</span>: <b>{p.capital}</b>
        </div>
    )
};
