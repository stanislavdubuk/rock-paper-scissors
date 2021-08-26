import s from './App.module.scss';
import Header from './components/header/Header';
import Game from './components/game/Game';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import { useAppDispatch } from './store/hooks';

import { useEffect } from 'react';
import { getLocalScore } from './store/scoreSlice';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLocalScore());
  });

  return (
    <div className={s.app}>
      {showModal && <Modal setShowModal={setShowModal} showModal={showModal} />}

      <Header />
      <Game />
      <button
        className={s.button}
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        RULES
      </button>
    </div>
  );
};

export default App;
