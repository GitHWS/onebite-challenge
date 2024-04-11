import './ContactItem.css';
import { memo } from 'react';

function ContactItem({ id, name, email, onDelete }) {
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

// Props가 변경 시 리렌더링 발생
// Props가 변경되지 않을 때 리렌더링 발생 X
// 현재 App 컴포넌트 리렌더링 시 onDelete 함수가 같은 로직의 다른 참조값을 가진 다른 함수됨
// 그러므로해당 함수에 메모이제이션을 위한 useCallback이 필요
export default memo(ContactItem);
