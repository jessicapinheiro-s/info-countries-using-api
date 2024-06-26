import React, { useEffect, useState } from 'react';
import { Container, FlagImageContainer, FlagImage } from "./card-style";

interface Country {
  cca2: string;
  name: {
    common: string;
  }
  capital: string[];
  subregion: string;
  area : string;
  population: string;
  maps:{
    googleMaps: string;
  }
}




const MeuComponente = () => {
  const urlCountriesFlags = 'https://flagsapi.com/';
  const linkRequestuInfo: string = 'https://restcountries.com/v3.1/';
  const requestType = 'all';
  const typeFlag = '/flat/';
  const tamFlag = '64.png';

  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch(linkRequestuInfo.concat(requestType))
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);



  console.log(countries);


  return (
    <div className='container-flags' style={{ gap: '50px', display: 'flex', flexWrap: 'wrap', justifyContent:'center' , margin: '50px 0px'}}>

      {
        countries.map(f => (
          <Container >
            <FlagImageContainer>
              <FlagImage key={f?.name.common} src={`${urlCountriesFlags}${f.cca2}${typeFlag}${tamFlag}`} alt={f?.name.common} />
            </FlagImageContainer>
            <h2>{f?.name.common}</h2>
            <p>Capital: {Array.isArray(f.capital) ? (f.capital).join(',') : f.capital}</p>
            <p>Region: {f.subregion}</p>
            <p>Area: {f.area}</p>
            <p>Population: {f.population}</p>
            <p><a href={f.maps.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps</a></p>
          </Container>


        ))
      }
    </div>
  )
};



export default MeuComponente;
