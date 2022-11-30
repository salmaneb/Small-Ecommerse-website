import { createContext } from "react";

export const myContext=createContext();
export const provider=myContext.Provider;
export const consumser=myContext.Consumer;