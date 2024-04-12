import './ContactList.css';
import ContactItem from './ContactItem';

export default function ContactList({ contacts }) {
  // 🤔 contacts의 경우 Context를 통해 전달 가능
  // 하지만 App 컴포넌트의 바로 아래의 자식 요소라 굳이 필요없을 것 같다는 판단하에 Props를 그대로 사용하는 것으로 결정
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}
