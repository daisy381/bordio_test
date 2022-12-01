import React, { FC } from 'react';

import {ContainerItem} from "./style";

type MenuItemProps = {
    label:string
}

const MenuItem: FC<MenuItemProps> = ({label}) => {

    return (
        <ContainerItem>{label}</ContainerItem>
    );
};

export default MenuItem;
