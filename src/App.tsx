import {
  AppContainer,
  GlobalStyle,
  VisitCounter,
  GithubLinkImage,
  ItemsInRow,
  AnimatedGifAndVisitCountContainer,
  CatGif,
} from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";
import { CustomDragLayer } from "./components/CustomDragLayer";
import countapi from "countapi-js";
import { useEffect, useState } from "react";
import GithubImage from "./GitHub-Mark-Light-64px.png";
import AnimatedCatGif from "./1451528851animated-cat-art-gif-27.gif";

export const App = () => {
  const { lists, dispatch } = useAppState();
  const [count, setCount] = useState(0);

  const countVisits = () => {
    countapi.visits("global").then((result) => {
      setCount(result.value);
    });
  };
  useEffect(() => {
    countVisits();
  }, []);
  console.log(count);
  return (
    // <div>
    <AppContainer>
      <GlobalStyle />
      <CustomDragLayer />
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ add new list"
        onAdd={(text) => dispatch(addList(text))}
      />

      <AnimatedGifAndVisitCountContainer>
        <VisitCounter>total visits: {count}</VisitCounter>
        <CatGif src={AnimatedCatGif} alt="cat gif" />
        {/* <p>I'm not distracting at all :)</p> */}
      </AnimatedGifAndVisitCountContainer>

      <ItemsInRow>
        <a
          href="https://github.com/smokycoffee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubImage} alt="github link :)" />
        </a>
        <a
          href="https://github.com/smokycoffee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLinkImage>hi :)</GithubLinkImage>
        </a>
      </ItemsInRow>
    </AppContainer>
    // </div>
  );
};

export default App;
