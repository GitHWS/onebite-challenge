import './ContactList.css';
import ContactItem from './ContactItem';
import { useContext } from 'react';
import { ContactStateContext } from '../App';

export default function ContactList() {
  // ✅ ContactStateContext의 Context를 통해 전달
  // 🤔 하지만 App 컴포넌트의 바로 아래의 자식 요소라 굳이 필요없을 것 같은데 Props를 그대로 사용하는 것이 더 좋지않을까?
  const contacts = useContext(ContactStateContext);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}
