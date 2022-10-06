import MainContainer from "components/containers/MainContainer";
import { withLayout } from "layout/Layout";
import { Main } from "./index.style";

function Home(): JSX.Element {
  return (
    <Main>
      <MainContainer>main</MainContainer>
    </Main>
  );
}

export default withLayout(Home);
