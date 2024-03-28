import styled from "styled-components";

export let Container = styled.article`
  background-color: #fff;
  max-width: 264px;
  height: 336px;
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-self: center;

  border-radius: 0.313rem;
  
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);

  overflow: hidden;

  transition: all 100ms;
  transform: perspective(1px) translateZ(0);
  backface-visibility: hidden;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 900px) {
    justify-self: flex-start;
  }
`;

export let FlagImageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 160px;
`;

export let FlagImage = styled.img`
  background-size: cover;
  object-fit: cover;

  width: 100px;
  height: 100px;
  padding: 0;
  margin: 0;
`;

export let Informations = styled.div`
  width: 100%;
  height: 100%;

  color: #000;

  padding: 1.5rem;
`;

export let Name = styled.h2`
  font-size: 1.125rem;
  font-weight: 800;

  line-height: 1.625rem;

  margin-bottom: 1rem;
`;

export let SubInformations = styled.p`
  width: 100%;
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 0.375rem;
`;

export let InformationLabel = styled.strong`
  font-weight: 600;
  margin-right: 0.4rem;
`;