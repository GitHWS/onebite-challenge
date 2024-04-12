import './ContactItem.css';
import { memo, useContext } from 'react';
import { ContactDispatchContext } from '../App';

function ContactItem({ id, name, email }) {
  // ✅ ContactDispatchContext의 onDelete 사용
  const { onDelete } = useContext(ContactDispatchContext);

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
