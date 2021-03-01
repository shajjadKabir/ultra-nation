import React from 'react';

const Country = (props) => {
    const { name, population, region, flag } = props.country;
    const flagStyle = { height: "60px" };
    const countryStyle = { border: '1px solid blue', padding: '10px', margin: '10px' };
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style = { countryStyle}>
            <h4>This is  {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>population: {population}</p>
            <p>region : {region}</p>
            <button onClick={ () => handleAddCountry(props.country)}> Add country</button>
        </div>
    );
};

export default Country;