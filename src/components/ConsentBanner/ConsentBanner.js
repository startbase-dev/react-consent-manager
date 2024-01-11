import React from 'react';
import ConsentModal from '../ConsentModal/ConsentModal';

import useConsent from '../../useConsent';
import useConsentBannerActions from '../../useConsentBannerActions';
import style from './ConsentBanner.module.css';

function ConsentBanner({
  children,
  settings,
  approve,
  decline,
  switchComponent,
}) {
  const { isBannerVisible, isDetailsVisible, toggleConsentModal } =
    useConsent();
  const { onDecline, onApprove } = useConsentBannerActions();

  return (
    <>
      {isBannerVisible && !isDetailsVisible && (
        <div className={style.banner}>
          <div className={style.content}>
            <div className={style.message}>{children}</div>
            <div className={style.actions}>
              {!settings?.hidden && (
                <button
                  className={style.secondary}
                  onClick={toggleConsentModal}
                >
                  {settings?.label ? settings.label : <>Customize</>}
                </button>
              )}
              {!decline?.hidden && (
                <button className={style.secondary} onClick={onDecline}>
                  {decline?.label ? decline.label : <>Decline</>}
                </button>
              )}
              <button className={style.primary} onClick={() => onApprove()}>
                {approve?.label ? approve.label : <>Accept</>}
              </button>
            </div>
          </div>
        </div>
      )}

      {isDetailsVisible && (
        <ConsentModal
          onToggle={toggleConsentModal}
          modal={settings?.modal}
          switchComponent={switchComponent}
        />
      )}
    </>
  );
}

export default ConsentBanner;
