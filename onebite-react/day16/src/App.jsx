import { useReducer, useCallback } from 'react';
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

  // Props로 전달되는 onCreate, onDelete - App 컴포넌트 리렌더링 시 함수의 재생성 방지
  // Props로 ContactEditor, ContactList, ContactItem 전달되기 때문에 useCallback을 사용하지 않을 시
  // App 컴포넌트의 리렌더링으로 새로운 참조값을 가진 함수가 재생성되면서 해당 함수를 Props로 가지는 컴포넌트는 불필요한 리렌더링 발생
  // 자세히 말하면 리렌더링 시 재생성된 같은 로직의 참조값이 다른 함수와 리렌더링 전 함수를 얕은 비교를 하면 false이기 때문에 불필요한 리렌더링 발생
  const onCreate = useCallback((newContact) => {
    dispatch({ type: 'CREATE', data: newContact });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: 'DELETE', targetId });
  }, []);

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
