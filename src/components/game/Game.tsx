import { FC, useEffect } from 'react';
import PaperCircle from '../paperCircle/PaperCircle';
import ScissorsCircle from '../scissorsCircle/ScissorsCircle';
import RockCircle from '../rockCircle/RockCircle';
import s from './Game.module.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { clear } from '../../store/gameSlice';

const Game: FC = () => {
  const userChoice = useAppSelector((state) => state.choice.userChoice);
  const computerChoice = useAppSelector((state) => state.choice.computerChoice);
  const winner = useAppSelector((state) => state.choice.winner);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(winner);
  }, [winner]);

  return (
    <div className={s.game}>
      {!userChoice && (
        <>
          <div className={s.top}>
            <PaperCircle />
            <ScissorsCircle />
          </div>
          <div className={s.bottom}>
            <RockCircle />
          </div>
        </>
      )}
      {userChoice && (
        <>
          <div className={s.result}>
            <div>User chose:{userChoice}</div>
            <div>Winner: {winner}</div>
            <div>Computer chose:{computerChoice}</div>
          </div>
          <button
            onClick={() => {
              dispatch(clear());
            }}
          >
            Play again
          </button>
        </>
      )}
    </div>
  );
};

export default Game;
