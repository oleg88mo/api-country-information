import React from 'react';

export default function DetailFlagAndDomain(p) {
    return (
        <div className="detail__flag">
            <span className="iterate">
                 <span className="label">Flag</span>: <img src={p.flag} alt="flag" style={{width: 30}}/>
            </span>
            <span className="iterate">
                 <span className="label">Domain</span>: <b>[{p.topLevelDomain}]</b>
            </span>
        </div>
    )
};
