import React from 'react';

export default function DetailTranslations(p) {
    return (
        <div className="detail__translations">
            <span className="label">Translations</span>:
            <ul>
                {
                    Object.keys(p.translations).map((input, i) => (<li key={i}>
                            <b>{input}: <span> {p.translations[input]}</span></b>
                        </li>)
                    )
                }
            </ul>
        </div>
    )
};
