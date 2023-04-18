import { Container } from "shared/ui";
import { Footer, Header, Timer } from "widgets";

import "./index.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Container>
          <Timer />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
