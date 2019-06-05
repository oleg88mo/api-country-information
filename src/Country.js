import React, {useState} from 'react';
// components & style
import SearchCountry from './components/searchCountry';
import EmptyDataCountry from './components/emptyDataCountry';
import CountryDetails from './components/countryDetails';
import 'antd/dist/antd.css';
import './style/index.css';

export default function Country() {
    const [spin, setSpin] = useState();
    const [country, setCountry] = useState();
    const [searchCountryName, setSearchCountryName] = useState();
    const getCountryData = async () => {
        setSpin(true);

        let countryData = await (await fetch(`https://restcountries.eu/rest/v2/name/${searchCountryName}`)).json();
        if (countryData.status === 404) {
            setSpin(null);
            setCountry(null);
        } else {
            setSpin(null);
            setCountry(countryData[0]);
        }

    };
    const handlerChangeSearchCountryName = e => setSearchCountryName(e.target.value);
    const onSearchByEnter = button => {
        if (button.key === 'Enter' && searchCountryName !== undefined && searchCountryName !== '') {
            getCountryData()
        }
    };

    return (
        <div>
            <SearchCountry
                getCountryData={getCountryData}
                searchCountryName={searchCountryName}
                handlerChangeSearchCountryName={handlerChangeSearchCountryName}
                onSearchByEnter={onSearchByEnter}
            />

            {country ? <CountryDetails
                country={country}
                spin={spin}
            /> : <EmptyDataCountry/>}
        </div>
    );
}
