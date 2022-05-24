import React, { FC, useEffect, useState } from 'react';
import { RadioButtonProps } from '../';
import { mergeClasses, generateId } from '../../../shared/utilities';
import { useRadioGroup } from './RadioGroup.context';

import styles from './radio.module.scss';

export const RadioButton: FC<RadioButtonProps> = ({
    ariaLabel,
    activeRadioButton,
    checked = false,
    disabled = false,
    name,
    value = '',
    id,
    setActiveRadioButton = () => {},
}) => {
    const [radioButtonId] = useState<string>(id || generateId());
    const { onRadioButtonClick, currentRadioButton } = useRadioGroup();
    const isActive: boolean = value === currentRadioButton;

    const updateActiveRadioButton = (value: string | number) => {
        setActiveRadioButton(value);
    };
    useEffect(() => {
        if (onRadioButtonClick) onRadioButtonClick(activeRadioButton, null);
    }, [activeRadioButton]);

    const radioButtonClassNames: string = mergeClasses([
        styles.radioButton,
        { [styles.disabled]: disabled },
    ]);

    return (
        <div className={styles.selector}>
            <input
                aria-label={ariaLabel}
                checked={isActive ? isActive : checked}
                disabled={disabled}
                id={radioButtonId}
                name={name}
                tabIndex={-1}
                type={'radio'}
                value={value}
                onClick={(e) => {
                    updateActiveRadioButton(value);
                    onRadioButtonClick(value, e);
                }}
                readOnly
            />
            <label
                htmlFor={radioButtonId}
                className={value === '' ? styles.labelNoValue : ''}
            >
                <span
                    id={`${radioButtonId}-custom-radio`}
                    className={radioButtonClassNames}
                    tabIndex={0}
                ></span>
                <span className={styles.selectorLabel}>{value}</span>
            </label>
        </div>
    );
};