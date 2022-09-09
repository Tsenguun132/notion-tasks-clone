import { createContext, useContext, FC } from "react";
import React, { ReactNode } from "react";

// data model
// types
type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

// define context

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  children?: ReactNode;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}

// define context provider

export const AppStateProvider = ({ children }: Props) => {
  const { lists } = appData;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  );
};
