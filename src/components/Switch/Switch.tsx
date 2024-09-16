import React, { forwardRef } from "react";
import cx from "clsx";
import s from "./Switch.module.scss";
import { SwitchProps } from "../../types";

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ name, onChange, checked = false }, inputRef) => {
    return (
      <label htmlFor={`switch_${name}`} className={s.switch}>
        <div className={s.inputRoot}>
          <input
            ref={inputRef}
            className={s.switchCheckbox}
            name={name}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            id={`switch_${name}`}
          />
          <div
            className={cx(s.switchLabel, {
              [s.switchInnerChecked]: checked,
            })}
          >
            <span
              className={cx(s.switchSwitch, {
                [s.switchSwitchChecked]: checked,
              })}
            />
          </div>
        </div>
      </label>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
