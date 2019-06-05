import React from 'react';
import {Input, Button, Row, Col} from 'antd';

export default function SearchCountry(p) {
    return (
        <Row>
            <Col span={18} push={3}>
                <Row type="flex" className="searchCountry" onKeyUp={(button) => p.onSearchByEnter(button)} tabIndex="1">
                    <Col span={18}>
                        <Input
                            size="large"
                            placeholder="Enter country name..."
                            onChange={p.handlerChangeSearchCountryName}
                            defaultValue={p.searchCountryName}
                        />
                    </Col>
                    <Col span={6}>
                        <Button
                            type="primary"
                            icon="search"
                            onClick={p.getCountryData}
                            disabled={p.searchCountryName === undefined || p.searchCountryName === ''}
                            style={{width: '100%', height: '100%'}}
                        >
                            Search
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

