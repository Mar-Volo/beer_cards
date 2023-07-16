import {Beers} from './BeersList.styled';
import {BeersListItem} from '../BeersListItem/BeersListItem'

export const BeersList = ({items}) => {
return <Beers>
    {items.map(item => {
        const {id } = item;
        return <BeersListItem key={id} item={item} />;
      })}
</Beers>
}