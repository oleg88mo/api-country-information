import React from 'react';
import {Spin, Row, Col} from 'antd';
// components
import DetailName from './detailComponents/name';
import DetailCapital from './detailComponents/capital';
import DetailSpelling from './detailComponents/spelling';
import DetailAlphaCode from './detailComponents/alphaCode';
import DetailBorders from './detailComponents/borders';
import DetailAreaAndPopulation from './detailComponents/areaAndPopulation';
import DetailCallingCodeAndTimeZone from './detailComponents/callingCodeAndTimezone';
import DetailFlagAndDomain from './detailComponents/flagAndDomain';
import DetailCurrencies from './detailComponents/currencies';
import DetailLanguages from './detailComponents/languages';
import DetailRegionAndLatitudeLongitude from './detailComponents/regionAndLatitudeLongitude';
import DetailTranslations from './detailComponents/translations';

export default function CountryDetails(p) {
    let detail = p.country;

    return (
        <Row>
            <Col span={18} push={3}>
                {p.spin && <Spin size="large"/>}
                <div className="detail">
                    <DetailName {...detail}/>
                    <DetailCapital {...detail}/>
                    {detail.altSpellings && <DetailSpelling {...detail}/>}
                    <DetailAlphaCode {...detail}/>
                    {detail.borders.length > 0 && <DetailBorders {...detail}/>}
                    <DetailAreaAndPopulation {...detail}/>
                    {detail.callingCodes.length > 0 && <DetailCallingCodeAndTimeZone {...detail}/>}
                    <DetailFlagAndDomain {...detail}/>
                    {detail.currencies.length > 0 && <DetailCurrencies {...detail}/>}
                    {detail.languages.length > 0 && <DetailLanguages {...detail}/>}
                    <DetailRegionAndLatitudeLongitude {...detail}/>
                    {detail.languages.length > 0 && <DetailTranslations {...detail}/>}
                </div>
            </Col>
        </Row>
    )
};
