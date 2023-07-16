import styled from 'styled-components';

export const HeaderBox = styled.header`
padding: 20px 0;
background-color: black;
box-shadow: 0 0 20px #000;
`
export const Logo = styled.span`
font-size: 70px;
text-transform: uppercase;
color: #ececec;
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  font-size: 20px;
`;

export const Input = styled.input`
width: inherit;
height: inherit;
padding: 8px;
background-color: inherit;
color: #ececec;
outline: none;
  border: none;
  border-bottom: 1px solid #ececec;
  &::placeholder {
    font-size: 15px;
    color: grey;
  }
`
export const FormButton = styled.button`
width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: inherit;
  border: none;
  outline: none;
  border-bottom: 1px solid #ececec;
  svg {
    fill: grey;
    transition: all 250ms ease-in-out;
  }
  &:hover,
  &:focus,
  &:active {
    svg {
      fill: #ececec;
    }
  }
`