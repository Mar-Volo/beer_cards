import styled from "styled-components";

export const ListItem = styled.li`
width: 230px;
border-radius: 15px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
padding: 10px 0;
flex-grow: 1;
transition: all 300ms ease;
filter: saturate(0.3);
&:hover,
&:focus {
filter: saturate(1);
}
`
export const Img = styled.img`
width: 100px;
height: auto;
object-fit: cover;
object-position: center;
`