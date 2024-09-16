import React, { useCallback, useState } from 'react';

import useConsent from '../../useConsent';
import style from './ConsentItem.module.scss';
import { ConsentItemProps } from '../../types';

function ConsentItem({
  onChange,
  id,
  name,
  description,
  mandatory = false,
  switchComponent: SwitchComponent,
}: Readonly<ConsentItemProps>) {
  const { consent } = useConsent();
  const [consentCheck, setConsentCheck] = useState(consent.includes(id));

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, type, checked } = e.target;
      setConsentCheck((prevState) =>
        type === 'checkbox' ? !prevState : prevState
      );
      onChange(name, checked);
    },
    [onChange]
  );

  return (
    <div className={style.item}>
      <div className={style.title}>
        <h3 className={style.label}>{name}</h3>
        {mandatory ? (
          <span className={style.mandatory}>Always Active</span>
        ) : (
          <SwitchComponent
            name={id}
            checked={consentCheck}
            onChange={handleChange}
          />
        )}
      </div>
      {description && <p className={style.description}>{description}</p>}
    </div>
  );
}

export default ConsentItem;
