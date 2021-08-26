import { FC } from 'react';
import logo from '../../assets/images/logo.svg';
import { useAppSelector } from '../../store/hooks';
import s from './Header.module.scss';

const Header: FC = () => {
  const score = useAppSelector((state) => state.score.score);

  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt='logo' />
      </div>
      <div className={s.scores}>
        <span className={s.title}>SCORE</span>
        <span className={s.score}>{score}</span>
      </div>
    </div>
  );
};

export default Header;
