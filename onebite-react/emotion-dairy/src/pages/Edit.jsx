import { useParams } from 'react-router-dom';
const Edit = () => {
  const { id } = useParams();

  return <div>{id}번 일기 수정 페이지입니다</div>;
};

export default Edit;
