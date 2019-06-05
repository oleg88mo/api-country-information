import React from 'react';

class Country extends React.Component {
    async componentWillMount() {
        await this.getApiData();
    }

    async getApiData() {
        let res = await fetch(`https://restcountries.eu/rest/v2/name/ukraine`);
        let data = await res.json();
        // console.log(data);
        if (data.status === 404) {
            alert('Sorry, API error')
        } else {
            // let {arrival, departure} = data.body;
            console.log('data.body', data);
            this.setState({data});
        }
    }

    render() {
        return (
            <div>s</div>
        )
    }
}

export default Country;
