import React, { useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "lorem Exercitation eu irure non aute qui ut.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "Est commodo proident labore ea consectetur sint duis proident.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "Laboris excepteur laborum reprehenderit magna cupidatat labore dolor.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvided: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return <EntriesContext.Provider value={{ ...state }}>{children}</EntriesContext.Provider>;
};
