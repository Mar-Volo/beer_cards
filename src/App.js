// import { useEffect } from "react";
// import useBeerStore from "./Store/beerStore";
// import fetchBeer from "./services/fetchBeer";
import { BeersList } from "./components/BeersList/BeersList";
import { Layout } from "./components/Layout/Layout";
import { Container } from "./components/Layout/Layout.styled";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Layout>
      <Header />
      <main className="main">
        <section className="beers__section">
          <Container className="beers__container">
            {/* <BeersList items={beers} /> */}
            <BeersList />
          </Container>
        </section>
      </main>
      <GlobalStyle />
    </Layout>
  );
}

export default App;
