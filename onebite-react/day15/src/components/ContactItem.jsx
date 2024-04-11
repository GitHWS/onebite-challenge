import './ContactItem.css';

export default function ContactItem({ id, name, email, onDelete }) {
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
