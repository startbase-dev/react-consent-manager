import React, { useCallback } from 'react';

import useConsent from '../../useConsent';
import useConsentBannerActions from '../../useConsentBannerActions';
import useSelectedServices from '../../useSelectedServices';
import ConsentItem from './ConsentItem';
import style from './ConsentModal.module.css';

function ConsentModal({ onToggle = () => {}, modal, switchComponent }) {
  const {
    options: { services },
  } = useConsent();
  const { onDecline, onApprove } = useConsentBannerActions();
  const { selectedServices, handleSelectedServiceChange } =
    useSelectedServices();

  const handleHide = useCallback(() => onToggle(), [onToggle]);

  const handleDecline = useCallback(() => {
    onDecline();
    onToggle();
  }, [onDecline, onToggle]);

  const handleApproveSelected = useCallback(() => {
    onApprove(selectedServices);
    onToggle();
  }, [onApprove, onToggle, selectedServices]);

  const handleApproveAll = useCallback(() => {
    onApprove();
    onToggle();
  }, [onApprove, onToggle]);

  return (
    <div className={style.modal} onClick={handleHide}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        <div className={style.header}>
          <h2>{modal.title}</h2>
          <p>{modal?.description}</p>
        </div>
        <div className={style.main}>
          {services.map(({ id, name, description, mandatory }, index) => (
            <ConsentItem
              id={id}
              name={name}
              description={description}
              mandatory={mandatory}
              onChange={handleSelectedServiceChange}
              key={index}
              switchComponent={switchComponent}
            />
          ))}
        </div>
        <div className={style.footer}>
          <span className={style.shadow}></span>
          {!modal?.decline?.hidden && (
            <button className={style.secondary} onClick={handleDecline}>
              {modal?.decline?.label ? modal?.decline?.label : <>Reject All</>}
            </button>
          )}
          <button className={style.secondary} onClick={handleApproveSelected}>
            {modal?.approve?.label ? (
              modal?.approve?.label
            ) : (
              <>Save My Preferences</>
            )}
          </button>
          <button className={style.primary} onClick={handleApproveAll}>
            {modal?.approveAll?.label ? (
              modal?.approveAll?.label
            ) : (
              <>Accept All</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConsentModal;
