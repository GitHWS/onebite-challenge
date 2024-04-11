import { useReducer } from 'react';
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

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);

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
