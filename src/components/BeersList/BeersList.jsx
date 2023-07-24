import { useEffect, useState } from "react";
import useBeerStore from "../../Store/beerStore";
import fetchBeer from "../../services/fetchBeer";
import { Beers } from "./BeersList.styled";
import { BeersListItem } from "../BeersListItem/BeersListItem";

export const BeersList = ({ items }) => {
  const beers = useBeerStore((state) => state.beersList);
  const setBeersList = useBeerStore((state) => state.setBeersList);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [firstElem, setFirstElem] = useState(0);
  const [lastElem, setLastElem] = useState(15);

  useEffect(() => {
    if (fetching) {
      const fetchData = async () => {
        const getBeers = await fetchBeer(currentPage);
        if (getBeers.length !== 0) {
          try {
            setBeersList(getBeers);
            setCurrentPage((prev) => prev + 1);
          } catch (error) {
            console.log(error.message);
          } finally {
            setFetching(false);
          }
        }
      };

      fetchData();
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFirstElem((prev) => prev + 5);
      setLastElem((prev) => prev + 5);
      setFetching(true);
    }
  };

  console.log(beers);

  return (
    <Beers>
      {beers.slice(firstElem, lastElem).map((item) => {
        const { id } = item;
        return <BeersListItem key={id} item={item} />;
      })}
    </Beers>
  );
};
