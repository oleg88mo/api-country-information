import React from 'react';

export default function DetailCurrencies(p) {
    return (
        <div className="detail__currencies">
            <span className="label">Currencies</span>:
            {p.currencies.map((cur, i) => (
                    <React.Fragment key={i}>
                        <b>{cur.name}</b>
                        <b>{cur.code}</b>
                        <b>{cur.symbol}</b>
                    </React.Fragment>
                )
            )}
        </div>
    )
};
