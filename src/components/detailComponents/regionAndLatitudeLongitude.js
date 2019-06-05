import React from 'react';

export default function DetailRegionAndLatitudeLongitude(p) {
    return (
        <div className="detail__region">
            <span className="iterate">
                <span className="label">Region:</span>
                <b>{p.region}</b>
            </span>
            <span className="iterate">
                <span className="label">Subregion:</span>
                <b>{p.subregion}</b>
            </span>
            <span className="iterate">
                <span className="label">Latitude/Longitude:</span>
                <b>
                    [
                    {p.latlng[0]}
                </b>
                <b>
                    {p.latlng[1]}
                    ]
                </b>
            </span>
        </div>
    )
};
