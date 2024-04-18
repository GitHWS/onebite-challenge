import { useNavigate, useParams } from 'react-router-dom';
import { getStringedDate } from '../util/get-stringed-date';
import useDiary from '../hooks/useDiary';

import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';

const Diary = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(id);

  if (!curDiaryItem) {
    return <div>데이터 로딩 중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text="< 뒤로 가기" />}
        rightChild={
          <Button onClick={() => nav(`/edit/${id}`)} text="수정하기" />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
