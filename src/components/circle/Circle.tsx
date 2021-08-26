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
  let borderColor;
  if (type === 'rock') {
    borderColor = 'rgb(212, 68, 50)';
  } else if (type === 'scissors') {
    borderColor = 'rgb(255, 174, 81)';
  } else {
    borderColor = 'rgb(98, 144, 230)';
  }
  const border = { border: `1rem solid ${borderColor}` };

  let iconTest;
  if (type === 'rock') {
    iconTest = iconRock;
  }
  if (type === 'paper') {
    iconTest = iconPaper;
  }
  if (type === 'scissors') {
    iconTest = iconScissors;
  }

  const dispatch = useAppDispatch();

  const handleChoice = () => {
    dispatch(userChoose(`${type}`));
    setTimeout(() => {
      dispatch(computerChoose());
      dispatch(compareChoices());
    }, 3000);
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
      <img src={iconTest} alt='icon' />
    </div>
  );
};

export default Circle;
