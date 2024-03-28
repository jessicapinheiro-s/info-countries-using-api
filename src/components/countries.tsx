import React, { useEffect, useState } from 'react';
import { Container, FlagImageContainer, FlagImage, Informations, Name, SubInformations, InformationLabel } from "./card-style";

interface Country {
  cca2: string;
  name:{
    common:string;
  }
  capital:string | string[];

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
    <div className='container-flags' style={{ gap: '50px', display: 'flex', flexWrap: 'wrap' }}>

        {
          countries.map(f => (   

            <Container >
              <FlagImageContainer>
                <FlagImage key={f?.name.common} src={`${urlCountriesFlags}${f.cca2}${typeFlag}${tamFlag}`} alt={f?.name.common} />
              </FlagImageContainer>
            <h1>{f?.name.common}</h1>
            <p>{f.capital}</p>
            </Container>


          ))
        }
      </div>
      )
};

      export default MeuComponente;
