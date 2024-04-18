import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
import useDiary from '../hooks/useDiary';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

const Edit = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(id);

  const onClickDelete = () => {
    if (confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      onDelete(id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (confirm('일기를 정말 수정할까요?')) {
      onUpdate(id, input.createdDate.getTime(), input.emotionId, input.content);
      nav('/', { replace: true });
    }
  };

  return (
    <div>
      <Header
        title="일기 수정하기"
        leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)} />}
        rightChild={
          <Button text="삭제하기" type="NEGATIVE" onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
