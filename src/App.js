// import { useEffect, useState } from "react";
// import useBeerStore from "./Store/beerStore";
// import FetchBeer from "./services/fetchBeer";
// import { BeersList } from "./components/BeersList/BeersList";
// import { Layout } from "./components/Layout/Layout";
// import { Container } from "./components/Layout/Layout.styled";
// import { Header } from "./components/Header/Header";
// import { GlobalStyle } from "./GlobalStyle";

// let page = 1;

// function App() {
//   const beers = useBeerStore((state) => state.beerList);
//   const setBeers = useBeerStore((state) => state.setBeerList);
//   const currentIndex = useBeerStore((state) => state.currentIndex);
//   const setCurrentIndex = useBeerStore((state) => state.setCurrentIndex);

//   useEffect(() => {
//     async function fetchData() {
//       const getBeer = await FetchBeer(page);
//       setBeers(getBeer);
//     }

//     fetchData();
//   }, [setBeers]);
//   console.log(beers);
//   return (
//     <Layout>
//       <Header />
//       <main className="main">
//         <section className="beers__section">
//           <Container className="beers__container">
//             <BeersList items={beers} />
//           </Container>
//         </section>
//       </main>
//       <GlobalStyle />
//     </Layout>
//   );
// }

// export default App;

import { useEffect, useRef, useState } from "react";
import useBeerStore from "./Store/beerStore";
import FetchBeer from "./services/fetchBeer";
import { BeersList } from "./components/BeersList/BeersList";
import { Layout } from "./components/Layout/Layout";
import { Container } from "./components/Layout/Layout.styled";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";


function App() {
  const {
    beerList,
    setBeerList,
    loadedBeers,
  } = useBeerStore((state) => ({
    beerList: state.beerList,
    setBeerList: state.setBeerList,
    loadedBeers: state.loadedBeers,
  }));

  const [page, setPage] = useState(1);
  const sliderRef = useRef(null);
  const itemWidth = 285;
  const itemsPerPage = 5;
  const totalItemsPerPage = 15;
  let currentIndex = 0;

  useEffect(() => {
    fetchData();
  }, [page, setBeerList]);

  const fetchData = async () => {
    try {
      const response = await FetchBeer(page);
      setBeerList(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      currentIndex -= itemsPerPage;
      sliderRef.current.scrollBy({
        left: -itemsPerPage * itemWidth,
        behavior: "smooth",
      });
    } else if (page > 1) {
      setPage(page - 1);
      currentIndex = currentIndex - totalItemsPerPage;

      if (loadedBeers.length >= totalItemsPerPage) {
        const newBeerList = loadedBeers.slice(
          currentIndex,
          currentIndex + totalItemsPerPage
        );
        setBeerList(newBeerList);
        sliderRef.current.scrollTo({
          left: currentIndex * itemWidth,
          behavior: "smooth",
        });
      } else {
        fetchData().then((response) => {
          const newBeerList = [...response, ...beerList];
          setBeerList(newBeerList);
          sliderRef.current.scrollTo({
            left: currentIndex * itemWidth,
            behavior: "smooth",
          });
        });
      }
    }
  };

  const handleNextClick = () => {
    const totalItems = beerList.length;
    if (currentIndex + itemsPerPage < totalItems) {
      currentIndex += itemsPerPage;
      sliderRef.current.scrollBy({
        left: itemsPerPage * itemWidth,
        behavior: "smooth",
      });
    } else {
      setPage(page + 1);
      currentIndex = itemsPerPage;

      if (loadedBeers.length >= totalItemsPerPage) {
        const newBeerList = loadedBeers.slice(itemsPerPage);
        setBeerList(newBeerList);
        sliderRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        fetchData().then((response) => {
          const newBeerList = [...beerList, ...response];
          setBeerList(newBeerList);
          sliderRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        });
      }
    }
  };

  const handleScroll = (e) => {
    const scrollOffset = e.target.scrollLeft;
    if (scrollOffset === 0) return;

    const maxScrollOffset = (beerList.length - totalItemsPerPage) * itemWidth;
    if (scrollOffset >= maxScrollOffset) {
      if (loadedBeers.length >= totalItemsPerPage) {
        const newBeerList = loadedBeers.slice(itemsPerPage);
        setBeerList(newBeerList);
        sliderRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        setPage(page + 1);
        fetchData().then((response) => {
          const newBeerList = [...beerList, ...response];
          setBeerList(newBeerList);
          sliderRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        });
      }
    }
  };
  console.log(beerList);
  return (
    <Layout>
      <Header />
      <main className="main">
        <section className="beers__section">
          <Container className="beers__container" ref={sliderRef}>
            <BeersList
              items={beerList.slice(
                currentIndex,
                currentIndex + totalItemsPerPage
              )}
              onScroll={handleScroll}
            />
          </Container>
          <div className="beers__btn">
            <button className="btn" onClick={handlePrevClick}>
              Prev
            </button>
            <button className="btn" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </section>
      </main>
      <GlobalStyle />
    </Layout>
  );
}

export default App;
