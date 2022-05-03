import React, { FC } from 'react';
import { MenuItem, MenuProps } from './Menu.types';
import { List } from '../List';
import { ButtonTextAlign, ButtonWidth, DefaultButton } from '../Button';

export const Menu: FC<MenuProps> = ({
    items,
    onChange,
    disruptive = false,
    classNames,
    style,
    itemClassNames,
    itemStyle,
    header,
    footer,
    listType,
}) => {
    const getDefaultButton = (item: MenuItem): JSX.Element => (
        <DefaultButton
            alignText={ButtonTextAlign.Left}
            buttonWidth={ButtonWidth.fill}
            {...item}
            disruptive={disruptive}
            onClick={() => onChange(item.value)}
        />
    );

    return (
        <List<MenuItem>
            items={items}
            renderItem={getDefaultButton}
            classNames={classNames}
            style={style}
            itemClassNames={itemClassNames}
            itemStyle={itemStyle}
            header={header}
            footer={footer}
            listType={listType}
            role="menu"
            itemRole="menuitem"
        />
    );
};
