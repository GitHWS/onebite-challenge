import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }

    onCreate(content);
    setContent('');
  };

  const onKeydown = (e) => {
    // if (e.nativeEvent.isComposing) return;
    // if (e.key === 'Enter') {
    //   console.log('💥 Enter 입력 감지');
    //   console.log('KeyCode', e.keyCode);
    //   console.log('✅ 엔터 발생 후 input value : ', e.target.value);
    //   console.log('🤔 아직 입력 중인가?', e.nativeEvent.isComposing);
    //   onSubmit();
    // }
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        placeholder="새로운 Todo..."
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
