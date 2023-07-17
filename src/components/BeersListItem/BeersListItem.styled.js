import styled from "styled-components";

export const ListItem = styled.li`
  width: 265px;
  border-radius: 15px;
  box-shadow: 0 0 4px #fff;
  background-color: #757474;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
  transition: all 300ms ease;
  filter: saturate(0.3);
  &:hover,
  &:focus {
    filter: saturate(1);
    transform: scale(1.02);
    box-shadow: 0 0 6px #fff;
  }
`;
export const Img = styled.img`
  width: 100px;
  object-fit: cover;
  object-position: center;
`;
