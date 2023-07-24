import styled from "styled-components";

export const ListItem = styled.li`
  width: 600px;
  height: calc((100vh - 86px) / 5.2);
  border-radius: 15px;
  box-shadow: 0 0 3px #fff;
  background-color: #4b4b4b;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  transition: all 300ms ease;
  filter: saturate(0.3);
  &:hover,
  &:focus {
    filter: saturate(1);
    transform: scale(1.02);
    box-shadow: 0 0 7px #fff;
  }
`;
export const Img = styled.img`
  height: 130px;
  width: auto;
  object-fit: cover;
  object-position: center;
`;
