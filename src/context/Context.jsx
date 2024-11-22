import { createContext } from "react";

export const SimpleContext = createContext({
    Valuex: [],
    Valuey: [],
    setValuex: () => {},
    setValuey: () => {},
    Nav: [],
    setNav: () => {},
});