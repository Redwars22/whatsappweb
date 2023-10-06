import { createContext, useState, useContext } from 'react';

// Create the context
export const ConversationContext = createContext<{
  id: number;
  name: string;
  picture: string;
  updateContext: (
    newData: Partial<{ id: number; name: string; picture: string }>
  ) => void;
}>({
  id: 0,
  name: 'Emanoel',
  picture:
    'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/355388774_306998611871615_6907549877272558566_n.jpg?ccb=11-4&oh=01_AdQHVpcbrpCXv-3XLTYBDcSqQX7d36-iIJSAWu4eYbUBJg&oe=65269CE3&_nc_sid=000000&_nc_cat=109',
  updateContext: () => {},
});

export function ConversationContextProvider({ children }) {
  const [contextData, setContextData] = useState({
    id: 0,
    name: 'Emanoel',
    picture:
      'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/355388774_306998611871615_6907549877272558566_n.jpg?ccb=11-4&oh=01_AdQHVpcbrpCXv-3XLTYBDcSqQX7d36-iIJSAWu4eYbUBJg&oe=65269CE3&_nc_sid=000000&_nc_cat=109',
  });

  const updateContext = (
    newData: Partial<{ id: number; name: string; picture: string }>
  ) => {
    setContextData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <ConversationContext.Provider value={{ ...contextData, updateContext }}>
      {children}
    </ConversationContext.Provider>
  );
}
