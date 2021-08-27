import { FC } from 'react';
import s from './Circle.module.scss';
import { useAppDispatch } from '../../store/hooks';
import {
  userChoose,
  computerChoose,
  compareChoices,
} from '../../store/gameSlice';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconRock from '../../assets/images/icon-rock.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';

interface Props {
  type: string;
  disabled: boolean;
}

const Circle: FC<Props> = ({ type, disabled }) => {
  const dispatch = useAppDispatch();

  let borderColor;
  let icon;

  if (type === 'rock') {
    borderColor = 'rgb(212, 68, 50)';
    icon = iconRock;
  } else if (type === 'scissors') {
    borderColor = 'rgb(255, 174, 81)';
    icon = iconScissors;
  } else {
    borderColor = 'rgb(98, 144, 230)';
    icon = iconPaper;
  }

  const border = { border: `1rem solid ${borderColor}` };

  const handleChoice = () => {
    dispatch(userChoose(`${type}`));
    setTimeout(() => {
      dispatch(computerChoose());
      dispatch(compareChoices());
    }, 1500);
  };

  return (
    <div
      className={s.circle}
      style={border}
      onClick={() => {
        if (!disabled) {
          handleChoice();
        }
      }}
    >
      <img src={icon} alt='icon' />
    </div>
  );
};

export default Circle;
