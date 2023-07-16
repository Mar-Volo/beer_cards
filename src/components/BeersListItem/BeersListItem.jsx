import { ListItem } from "./BeersListItem.styled";
import { Img } from "./BeersListItem.styled";
export const BeersListItem = ({ item }) => {
  const { image_url } = item;
  return (
    <ListItem>
      <Img src={image_url} loading="lazy" alt="beer" />
    </ListItem>
  );
};
