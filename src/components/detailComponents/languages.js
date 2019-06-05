import React from 'react';

export default function DetailLanguages(p) {
    return (
        <div className="detail__languages">
            <span className="label">Languages</span>:
            <ul>
                {p.languages.map((lang, i) => (
                        <li key={i}>
                            <b>{lang.iso639_1} <span>(iso639_1)</span></b>
                            <b>{lang.iso639_2} <span>(iso639_2)</span></b>
                            <b>{lang.name} <span>(name)</span></b>
                            <b>{lang.nativeName} <span>(nativeName)</span></b>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
};
