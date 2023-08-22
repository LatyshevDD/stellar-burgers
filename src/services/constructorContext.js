import { createContext, useReducer } from 'react';

export const ConstructorContext = createContext(null);
export const ConstructorDispatchContext = createContext(null);

export function ConstructorProvider({ children }) {
  
  const [data, dispatch] = useReducer(
    constructorReducer,
    {
      bun: null,
      ingredients: []
    }
  );

  return (
    <ConstructorContext.Provider value={data}>
      <ConstructorDispatchContext.Provider value={dispatch}>
        {children}
      </ConstructorDispatchContext.Provider>
    </ConstructorContext.Provider>
  );
}

function constructorReducer(data, action) {
  switch (action.type) {
    case 'addIngredient': {
      return {
        ...data,
        ingredients: [
          ...data.ingredients,
          action.payload
        ]
      };
    }
    case 'addBun': {
      if (!data.bun) {
        return {
          ...data, 
          bun: action.payload
        };
      }
      else {
        if (data.bun._id === action.payload._id) {
          return {
            ...data
          };
        }
        else {
          return {
            ...data, 
            bun: action.payload
          };
        }  
      }
    }
  
    // case 'deleted': {
    //   return tasks.filter(t => t.id !== action.id);
    // }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

