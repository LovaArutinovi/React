import MainContainer from "components/containers/MainContainer";
import { withLayout } from "layout/Layout";
import styled from "styled-components";

function Home(): JSX.Element {
  return (
    <Main>
      <MainContainer>main</MainContainer>
    </Main>
  );
}

export default withLayout(Home);

export const Main = styled.div``;
