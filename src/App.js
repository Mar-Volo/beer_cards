import { useEffect, useState } from "react";
import FetchBeer from "./services/fetchBeer";
import { BeersList } from "./components/BeersList/BeersList";
import { Layout } from "./components/Layout/Layout";
import { Container } from "./components/Layout/Layout.styled";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";

let page = 1;

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getBeer = await FetchBeer(page);
      setBeers(getBeer);
    }

    fetchData();
  }, []);
  console.log(beers);
  return (
    <Layout>
      <Header />
      <main>
        <section className="beers__section">
        <Container className="beers__container">
        <BeersList items={beers} />
      </Container>
        </section>
     
      </main>
      <GlobalStyle />
    </Layout>
  );
}

export default App;
