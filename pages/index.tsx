import MainContainer from "components/containers/MainContainer";
import { MainSlider } from "components/templates/MainSlider";
import { withLayout } from "layout/Layout";
import { Main } from "./index.style";

function Home(): JSX.Element {
  return (
    <Main>
      <MainContainer>
        <MainSlider />
      </MainContainer>
    </Main>
  );
}

export default withLayout(Home);
