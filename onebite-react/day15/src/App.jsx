import { useReducer } from 'react';
import './App.css';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';

// Reducer 함수
const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'DELETE':
      return state.filter((contact) => contact.id !== action.targetId);
  }
};

function App() {
  // useReducer 사용
  const [contacts, dispatch] = useReducer(reducer, []);

  // dispatch 함수 호출
  const onCreate = (newContact) => {
    dispatch({ type: 'CREATE', data: newContact });
  };

  const onDelete = (targetId) => {
    dispatch({ type: 'DELETE', targetId });
  };

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
