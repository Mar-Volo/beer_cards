import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import useBeerStore from "./Store/beerStore";
import fetchBeer from "./services/fetchBeer";
import { BeersList } from "./components/BeersList/BeersList";
import { Layout } from "./components/Layout/Layout";
import { Container } from "./components/Layout/Layout.styled";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";

let page = 1;
function App() {
  const beers = useBeerStore((state) => state.beersList);
  const setBeersList = useBeerStore((state) => state.setBeersList);

  useEffect(() => {
    const fetchData = async () => {
      const getBeers = await fetchBeer(page);
      if (getBeers.length === 0) {
        toast('Beers not found', {
          position: 'top-right',
          autoClose: 1500,
          theme: 'dark',
        });
      } else {
        try {
          if (getBeers.length !== 0) {
            setBeersList(getBeers);
          }
        } catch (error) {
          console.log(error.message);
          toast(
            {
              message: error.message,
              type: 'error',
            },
            {
              position: 'top-right',
              autoClose: 1500,
              theme: 'dark',
            }
          );
        }
      }
      
    };
    fetchData();
  }, []);
  console.log(beers);
  return (
    <Layout>
      <Header />
      <main className="main">
        <section className="beers__section">
          <Container className="beers__container">
            <BeersList items={beers} />
          </Container>
        </section>
      </main>
      <GlobalStyle />
      <ToastContainer
      autoClose={2000}
      style={{ boxShadow: '0px -0px 3px whitesmoke', height: '70px' }}
    />
    </Layout>
  );
}

export default App;

