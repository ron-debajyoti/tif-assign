import React, { useState } from 'react';
import styled from 'styled-components/macro';
import bgShortenDesktop from '../images/bg-shorten-desktop.svg';

export const InputUrl = styled.input`
  padding: 0.5em;
  color: white;
  background-color: #2acfcf;
  border: plaevioletred;
  border-radius: 10%;
  margin-bottom: 0.5em;
  display: inline-flex;
  overflow: hidden;
  width: -moz-available;
`;

export const InputSubmit = styled.input`
  padding: 0.5em;
  color: white;
  background-color: #2acfcf;
  border: plaevioletred;
  border-radius: 10%;
  margin-bottom: 0.5em;
  display: flex;
`;

export const Message = styled.div`
  margin: 0.5em;
  padding: 1px;
  font-size: 15px;
  color: palevioletred;
  display: inline-block;
  overflow: hidden;
  width: -moz-available;
`;

export const FormGroup = styled.form`
  color: palevioletred;
  margin: 20px;
  padding: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 10px;
  padding: 40px;
  background-image: url(${(props) => props.img});
`;

const REGEXCHECK =
  '^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$';

const validUrlChecker = (url) => {
  const checkerUrl = new RegExp(REGEXCHECK, 'i');
  return checkerUrl.test(url);
};

const Shortner = () => {
  const [url, setUrl] = useState('');

  const onSubmit = (event) => {
    // use the API to get results
    if (url.length > 0) {
      console.log(`YAAAAY: ${url}`);
    } else {
      alert(` Enter a valid URL `);
    }
    event.preventDefault();
  };

  const onChange = (event) => {
    console.log(`THIS CALLED HERE : ${event.target.value}`);
    if (validUrlChecker(event.target.value)) {
      setUrl(event.target.value);
    }
  };

  return (
    <Wrapper img={bgShortenDesktop}>
      <FormGroup onSubmit={onSubmit}>
        <Message>
          <InputUrl type="text" onInput={onChange} />
          Please add a link.
        </Message>
        <InputSubmit type="submit" value="Shorten It!" />
      </FormGroup>
    </Wrapper>
  );
};

export default Shortner;
