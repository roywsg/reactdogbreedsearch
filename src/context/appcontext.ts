import {createContext} from "react";

export type AppContextType = {
  sort: string
  order: string
}

type AppContextProps = {
  appContext: AppContextType
  setAppContext: React.Dispatch<React.SetStateAction<AppContextType>>
}

const defaultContext: AppContextProps = {
  appContext: {sort: 'name', order: 'asc'},
  setAppContext: () => undefined,
}

export const AppContext = createContext(defaultContext) 