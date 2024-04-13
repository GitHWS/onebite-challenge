import { useParams } from 'react-router-dom';
const Edit = () => {
  const { id } = useParams();

  return <div>{id}번 일기입니다</div>;
};

export default Edit;
