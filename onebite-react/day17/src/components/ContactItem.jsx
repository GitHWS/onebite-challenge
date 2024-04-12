import './ContactItem.css';
import { memo, useContext } from 'react';
import { ContactDispatchContext } from '../App';

function ContactItem({ id, name, email }) {
  // ✅ ContactDispatchContext의 onRemoveContact 사용
  const { onRemoveContact } = useContext(ContactDispatchContext);

  const deleteContact = () => {
    onRemoveContact(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={deleteContact}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
