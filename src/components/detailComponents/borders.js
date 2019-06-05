import React from 'react';

export default function DetailBorders(p) {
    return (
        <div className="detail__borders">
            <span className="label">{p.name} borders with</span>: {p.borders.map((border, i) => (<b key={i}>{border}</b>))}
        </div>
    )
};
