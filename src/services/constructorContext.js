import { createContext, useReducer } from 'react';
import { data } from '../utils/data';

export const ConstructorContext = createContext(null);
export const ConstructorDispatchContext = createContext(null);

export function ConstructorProvider({ children }) {
  const [ingrediences, dispatch] = useReducer(
    constructorReducer,
    data
  );

  return (
    <ConstructorContext.Provider value={ingrediences}>
      <ConstructorDispatchContext.Provider value={dispatch}>
        {children}
      </ConstructorDispatchContext.Provider>
    </ConstructorContext.Provider>
  );
}

function constructorReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

