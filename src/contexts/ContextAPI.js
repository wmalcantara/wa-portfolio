import { createContext, useState } from 'react';



export const ContextAPI = createContext();

export function ContextAPIProvider(props) {

  const [isModalOpen, setIsModalOpen] = useState(false);
 
  return (
  <ContextAPI.Provider 
    value={{
      isModalOpen,
      setIsModalOpen
    }}>

    {props.children}
  </ContextAPI.Provider>
  )

}