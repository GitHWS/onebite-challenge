import { useRef, useState } from 'react';
import './ContactEditor.css';

export default function ContactEditor({ onCreate }) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
  });

  // 빈 입력 시 focus를 위한 Ref
  const contactNameRef = useRef();
  const contactEmailRef = useRef();

  // 생성된 contact의 id 값을 위한 Ref
  const contactIdRef = useRef(0);

  const onChange = (e) => {
    // 동적 프로퍼티로 입력된 input에 따라 해당 프로퍼티에 상태 값 업데이트
    setContact((contact) => {
      return { ...contact, [e.target.name]: e.target.value };
    });
  };

  const onCreateContact = () => {
    // name, email input이 빈 값일 때 새로운 연락처 생성을 중단하고 포커스 설정
    if (!contactNameRef.current.value) {
      contactNameRef.current.focus();
      return;
    }

    if (!contactEmailRef.current.value) {
      contactEmailRef.current.focus();
      return;
    }

    // 객체에 id 프로퍼티를 추가하고 Spread 연산자로 contact 전개 후 onCreate 인수로 전달
    onCreate({ id: contactIdRef.current++, ...contact });
    // 생성 후 input 값 초기화
    setContact({
      name: '',
      email: '',
    });
  };

  // Enter 입력 시에도 새로운 연락처가 생성되도록 함
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
