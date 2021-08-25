import s from './App.module.scss';
import Header from './components/header/Header';
import Game from './components/game/Game';

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <Game />
    </div>
  );
};

export default App;
