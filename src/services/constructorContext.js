import { createContext, useReducer } from 'react';

export const ConstructorContext = createContext(null);
export const ConstructorDispatchContext = createContext(null);
export const OrderContext = createContext(null);
export const OrderDispatchContext = createContext(null);

export function ConstructorProvider({ children }) {
  
  const [orderData, orderDataDispatch] = useReducer(
    orderDataReducer,
    {
      name: "",
      order: {
        number: null
      },
      success: false
    }
  );
  
  const [burgerData, burgerDataDispatch] = useReducer(
    burgerDataReducer,
    {
      bun: null,
      ingredients: []
    }
  );

  return (
    <ConstructorContext.Provider value={burgerData}>
      <ConstructorDispatchContext.Provider value={burgerDataDispatch}>
        <OrderContext.Provider value={orderData}>
          <OrderDispatchContext.Provider value={orderDataDispatch}>
            {children}
          </OrderDispatchContext.Provider>
        </OrderContext.Provider>
      </ConstructorDispatchContext.Provider>
    </ConstructorContext.Provider>
  );
}

function burgerDataReducer(burgerData, action) {
  switch (action.type) {
    case 'addIngredient': {
      return {
        ...burgerData,
        ingredients: [
          ...burgerData.ingredients,
          action.payload
        ]
      };
    }
    case 'addBun': {
      if (!burgerData.bun) {
        return {
          ...burgerData, 
          bun: action.payload
        };
      }
      else {
        if (burgerData.bun._id === action.payload._id) {
          return {
            ...burgerData
          };
        }
        else {
          return {
            ...burgerData, 
            bun: action.payload
          };
        }  
      }
    }
    case 'deleteIngredient': {
      return {
        ...burgerData,
        ingredients: burgerData.ingredients.filter(item => item._id !== action.id),
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function orderDataReducer(orderData, action) {
  switch (action.type) {
    case 'addIngredient': {
      // return {
      //   ...burgerData,
      //   ingredients: [
      //     ...burgerData.ingredients,
      //     action.payload
      //   ]
      // };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

