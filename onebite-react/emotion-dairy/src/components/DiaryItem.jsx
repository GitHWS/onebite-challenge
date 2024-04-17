import './DiaryItem.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import { getEmotionImage } from '../util/get-emotion-image';
import Button from './Button';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();
  const { onDelete } = useContext(DiaryDispatchContext);

  const onDeleteDiaryItem = () => {
    const deleteConfirm = confirm('정말로 삭제하시겠습니까?');

    if (deleteConfirm) {
      onDelete(id);
    }
  };

  return (
    <div className="DiaryItem">
      <div
        className={`img_section img_section_${emotionId}`}
        onClick={() => nav(`/diary/${id}`)}>
        <img src={getEmotionImage(emotionId)} alt="" />
      </div>
      <div className="info_section" onClick={() => nav(`/diary/${id}`)}>
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text="수정하기" onClick={() => nav(`/edit/${id}`)} />
        <Button text="삭제하기" type="NEGATIVE" onClick={onDeleteDiaryItem} />
      </div>
    </div>
  );
};

export default DiaryItem;
