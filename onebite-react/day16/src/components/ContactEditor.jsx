import { useRef, useState, memo } from 'react';
import './ContactEditor.css';

// Props인 onCreate를 App 컴포넌트에서 useCallback을 통해 리렌더링 시 재생성을 방지
// -> React.memo를 통해 Props의 변경이 없을 시 리렌더링하지 않음
function ContactEditor({ onCreate }) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
  });

  const contactNameRef = useRef();
  const contactEmailRef = useRef();

  const contactIdRef = useRef(0);

  const onChange = (e) => {
    setContact((contact) => {
      return { ...contact, [e.target.name]: e.target.value };
    });
  };

  const onCreateContact = () => {
    if (!contactNameRef.current.value) {
      contactNameRef.current.focus();
      return;
    }

    if (!contactEmailRef.current.value) {
      contactEmailRef.current.focus();
      return;
    }

    onCreate({ id: contactIdRef.current++, ...contact });
    setContact({
      name: '',
      email: '',
    });
  };

  const onKeydownEnter = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
      onCreateContact();
    }
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          ref={contactNameRef}
          name="name"
          className="name"
          placeholder="이름 ..."
          value={contact.name}
          onChange={onChange}
          onKeyDown={onKeydownEnter}
        />
        <input
          ref={contactEmailRef}
          name="email"
          className="contact"
          placeholder="연락처(이메일) ..."
          value={contact.email}
          onChange={onChange}
          onKeyDown={onKeydownEnter}
        />
      </div>
      <button onClick={onCreateContact}>Add</button>
    </div>
  );
}

export default memo(ContactEditor);
