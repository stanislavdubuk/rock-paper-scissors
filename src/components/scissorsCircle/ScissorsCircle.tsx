import { FC } from 'react';
import s from './ScissorsCircle.module.scss';
import icon from '../../assets/images/icon-scissors.svg';
import { useAppDispatch } from '../../store/hooks';
import {
  userChoose,
  computerChoose,
  compareChoices,
} from '../../store/gameSlice';

const ScissorsCircle: FC = () => {
  const dispatch = useAppDispatch();

  const handleChoice = () => {
    dispatch(userChoose('scissors'));
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

export default ScissorsCircle;
