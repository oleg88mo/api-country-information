import React from 'react';

export default function DetailCallingCodeAndTimeZone(p) {
    return (
        <div className="detail__calling-codes">
            <span className="iterate">
                 <span className="label">Calling codes</span>: {p.callingCodes.map((code, i) => (
                <b key={i}>{code}</b>))}
            </span>
            <span className="iterate">
                <span className="label">Timezones</span>:
                {p.timezones.length > 0 && p.timezones.map((code, i) => (<b key={i}>[{code}]</b>))}
            </span>
        </div>
    )
};
