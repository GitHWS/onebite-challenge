import './ContactEditor.css';
import { useRef, useState, memo, useContext } from 'react';
import { ContactContext } from '../App';

function ContactEditor() {
  // ✅ ContactContext의 onCreate 구조 분해 할당 후 사용
  const { onCreate } = useContext(ContactContext);
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
    contactNameRef.current.focus();
  };

  const onKeydownEnter = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
      onCreateContact();
      contactNameRef.current.focus();
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
