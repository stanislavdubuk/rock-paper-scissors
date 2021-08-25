import { FC } from 'react';
import s from './RockCircle.module.scss';
import icon from '../../assets/images/icon-rock.svg';
import { useAppDispatch } from '../../store/hooks';
import {
  userChoose,
  computerChoose,
  compareChoices,
} from '../../store/gameSlice';

const RockCircle: FC = () => {
  const dispatch = useAppDispatch();

  const handleChoice = () => {
    dispatch(userChoose('rock'));
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

export default RockCircle;
