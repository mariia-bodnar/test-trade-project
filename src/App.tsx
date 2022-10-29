import { Banner } from "./components/banner/Banner";
import { Menu } from "./components/menu/Menu";
import { Content } from "./components/sections/Content";
import { GlobalContextProvider } from "./context";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <GlobalContextProvider>
      <div className="wrapper">
        <div className="bg-1"></div>
        <div className="bg-2"></div>
        <GlobalStyle />
        <Menu />
        <main>
          <Banner />
          <Content />
        </main>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
