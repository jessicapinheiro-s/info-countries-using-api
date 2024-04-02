import React, { useEffect, useState } from 'react';
import { Container, FlagImageContainer, FlagImage } from "./card-style";

interface Country {
  cca2: string;
  name: {
    common: string;
  }
  capital: string | string[];
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




  return (
    <div className='container-flags' style={{ gap: '50px', display: 'flex', flexWrap: 'wrap', justifyContent:'center' }}>

      {
        countries.map(f => (

          <Container >
            <FlagImageContainer>
              <FlagImage key={f?.name.common} src={`${urlCountriesFlags}${f.cca2}${typeFlag}${tamFlag}`} alt={f?.name.common} />
            </FlagImageContainer>
            <h2>{f?.name.common}</h2>
            <p>Capital:{Array.isArray(f.capital) ? f.capital.map(item => (
              <p> {item}</p>
            )) : f.capital}</p>
            <p>Region: {f.subregion}</p>
            <p>Areaa: {f.area}</p>
            <p>Population: {f.population}</p>
            <p><a href={f.maps.googleMaps}>Google Maps</a></p>
          </Container>


        ))
      }
    </div>
  )
};

export default MeuComponente;
