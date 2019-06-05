import React from 'react';

export default function DetailAlphaCode(p) {
    return (
        <div className="detail__alpha-code">
            <span className="iterate">
                <span className="label">Alpha2Code:</span>
                <b>{p.alpha2Code}</b>
            </span>
            <span className="iterate">
                <span className="label">Alpha3Code:</span>
                <b>{p.alpha3Code}</b>
            </span>
        </div>
    )
};
