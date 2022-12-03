import React, { FC } from 'react';

import plus from '../../assets/images/plus.svg';
import {
    Container,
    ButtonContent,
    ButtonIcon
} from "./style";


const Button: FC = () => {

    return (
        <Container>
            <ButtonIcon src={plus} alt="add_new_icon"/>
            <ButtonContent>{"Add new"}</ButtonContent>
        </Container>
    );
};

export default Button;
