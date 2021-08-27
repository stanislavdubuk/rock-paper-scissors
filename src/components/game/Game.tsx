import { FC, useEffect } from 'react';
import Circle from '../circle/Circle';
import s from './Game.module.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { clear } from '../../store/gameSlice';
import { increment, setLocalScore } from '../../store/scoreSlice';
import backgroundImg from '../../assets/images/bg-triangle.svg';
import { CircularProgress } from '@material-ui/core';

const Game: FC = () => {
  const userChoice = useAppSelector((state) => state.choice.userChoice);
  const computerChoice = useAppSelector((state) => state.choice.computerChoice);
  const winner = useAppSelector((state) => state.choice.winner);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (winner === 'user') {
      dispatch(increment());
      dispatch(setLocalScore());
    }
  }, [winner, dispatch]);

  return (
    <div className={s.game}>
      {!userChoice && (
        <>
          <div
            className={s.top}
            style={{ backgroundImage: `url(${backgroundImg})` }}
          >
            <Circle type='paper' disabled={false} />
            <Circle type='scissors' disabled={false} />
          </div>
          <div className={s.bottom}>
            <Circle type='rock' disabled={false} />
          </div>
        </>
      )}
      {userChoice && (
        <>
          <div className={s.result}>
            <div className={s.player}>
              <span>YOU PICKED</span>
              <Circle type={userChoice} disabled={true} />
            </div>
            {computerChoice && (
              <div className={s.again}>
                {winner === 'user' && <span>YOU WIN</span>}
                {winner === 'computer' && <span>YOU LOSE</span>}
                {winner === 'draw' && <span>DRAW</span>}
                <button
                  className={s.button}
                  onClick={() => {
                    dispatch(clear());
                  }}
                >
                  PLAY AGAIN
                </button>
              </div>
            )}
            <div className={s.player}>
              <span>THE HOUSE PICKED</span>
              {computerChoice !== '' ? (
                <Circle type={computerChoice} disabled={true} />
              ) : (
                <CircularProgress />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
