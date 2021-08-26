import { FC } from 'react';
import s from './Modal.module.scss';
import rules from '../../assets/images/image-rules.svg';
import closeIcon from '../../assets/images/icon-close.svg';

interface Props {
  setShowModal: any;
  showModal: any;
}

const Modal: FC<Props> = ({ setShowModal, showModal }) => {
  return (
    <div className={s.modal}>
      <div className={s.rules}>
        <div className={s.top}>
          <span>RULES</span>
          <button
            className={s.button}
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            <img src={closeIcon} alt='' />
          </button>
        </div>
        <img src={rules} alt='' />
      </div>
    </div>
  );
};

export default Modal;
