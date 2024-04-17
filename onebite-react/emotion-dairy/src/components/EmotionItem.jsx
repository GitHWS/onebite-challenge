import './EmotionItem.css';
import { getEmotionImage } from '../util/get-emotion-image';

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      className={`EmotionItem ${isSelected && `EmotionItem_on_${emotionId}`}`}
      onClick={onClick}>
      <img
        className="emotion_img"
        src={getEmotionImage(emotionId)}
        alt={`오늘의 기분은 ${emotionName}`}
      />
      <div className="emotion_name ">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
