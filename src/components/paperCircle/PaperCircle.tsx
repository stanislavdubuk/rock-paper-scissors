import { FC } from 'react';
import s from './PaperCircle.module.scss';
import icon from '../../assets/images/icon-paper.svg';
import { useAppDispatch } from '../../store/hooks';
import {
  userChoose,
  computerChoose,
  compareChoices,
} from '../../store/gameSlice';

const PaperCircle: FC = () => {
  const dispatch = useAppDispatch();

  const handleChoice = () => {
    dispatch(userChoose('paper'));
    setTimeout(() => {
      dispatch(computerChoose());
      dispatch(compareChoices());
    }, 3000);
  };

  return (
    <div className={s.circle} onClick={handleChoice}>
      <img src={icon} alt='icon' />
    </div>
  );
};

export default PaperCircle;
