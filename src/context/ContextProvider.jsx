import React, { useContext, useState } from 'react'
import {SimpleContext} from '../context/Context'

function ContextProvider({children}) {

  const [Valuex, setValuex] = useState(0);
  const [Valuey, setValuey] = useState(0);
  const [Nav, setNav] = useState(true);

  return (
    <>
    <SimpleContext.Provider value={{Valuex, setValuex, Valuey, setValuey,Nav, setNav }}>
    {children}
    </SimpleContext.Provider>
    </>
  )
}

export default ContextProvider;