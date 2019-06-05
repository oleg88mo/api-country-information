import React from 'react';

export default function DetailSpelling(p) {
    return (
        <div className="detail__spelling">
            <span className="label">Alternative spellings:</span>
            {p.altSpellings.map((spelling, i) => (<b key={i}>{spelling}</b>))}
        </div>
    )
};
