import {
  AppContainer,
  GlobalStyle,
  VisitCounter,
  GithubLinkImage,
  ItemsInRow,
} from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";
import { CustomDragLayer } from "./components/CustomDragLayer";
import countapi from "countapi-js";
import { useEffect, useState } from "react";
import GithubImage from "./GitHub-Mark-Light-64px.png";
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
    <div>
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
      </AppContainer>
      <VisitCounter>total visits: {count}</VisitCounter>
      <ItemsInRow>
        <a href="https://github.com/smokycoffee">
          <img src={GithubImage} alt="github link :)" />
        </a>
        <a href="https://github.com/smokycoffee">
          <GithubLinkImage>hi check out my projects :)</GithubLinkImage>
        </a>
      </ItemsInRow>
    </div>
  );
};

export default App;
