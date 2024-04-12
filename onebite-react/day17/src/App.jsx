import { useReducer, useCallback, createContext, useMemo } from 'react';
import './App.css';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'DELETE':
      return state.filter((contact) => contact.id !== action.targetId);
  }
};

// ✅ ContactStateContext, ContactDispatchContext 생성
export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);

  const onCreate = useCallback((newContact) => {
    dispatch({ type: 'CREATE', data: newContact });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: 'DELETE', targetId });
  }, []);

  // useMemo로 Context로 인해 전달되는 객체가 컴포넌트 리렌더링으로 인해 재생성되는 것을 방지
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      {/* ✅ ContactContext.Provider로 Context 데이터 제공 범위 설정 */}
      <ContactDispatchContext.Provider value={memoizedDispatch}>
        <section>
          <ContactEditor />
        </section>
        <ContactStateContext.Provider value={contacts}>
          <section>
            <ContactList />
          </section>
        </ContactStateContext.Provider>
      </ContactDispatchContext.Provider>
    </div>
  );
}

export default App;
