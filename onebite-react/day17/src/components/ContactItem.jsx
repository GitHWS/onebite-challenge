import './ContactItem.css';
import { memo, useContext } from 'react';
import { ContactContext } from '../App';

function ContactItem({ id, name, email }) {
  // ✅ ContactContext의 onDelete 사용
  const { onDelete } = useContext(ContactContext);

  const onDeleteContact = () => {
    onDelete(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={onDeleteContact}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
