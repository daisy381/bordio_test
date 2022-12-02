import React, { FC } from 'react';

import {
    Container,
    ButtonsWrapper,
    ProfileWrapper
} from "./style";
import Button from "../Button";

const Navbar: FC = () => {

    return (
        <Container>
            <ButtonsWrapper>
                <Button/>
            </ButtonsWrapper>

            <ProfileWrapper>

            </ProfileWrapper>
        </Container>
    );
};

export default Navbar;
