import { FC } from 'react';
import logo from '../../assets/images/logo.svg';
import s from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt='logo' />
      </div>
      <div className={s.scores}>
        <span className={s.title}>SCORE</span>
        <span className={s.score}>12</span>
      </div>
    </div>
  );
};

export default Header;
