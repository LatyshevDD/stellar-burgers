import { createContext, useReducer } from 'react';


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
  
  

  return (
        <OrderContext.Provider value={orderData}>
          <OrderDispatchContext.Provider value={orderDataDispatch}>
            {children}
          </OrderDispatchContext.Provider>
        </OrderContext.Provider>
  );
}


function orderDataReducer(orderData, action) {
  switch (action.type) {
    case 'addOrder': {
      return {
        name: action.payload.name,
        order: {
          number: action.payload.order.number
        },
        success: action.payload.success
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

