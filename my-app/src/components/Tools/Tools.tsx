import React, { FC } from 'react';

import {
    Container,
    TitleWrapper,
} from "./style";

import ToolTabs from "../ToolTabs";

import {data} from "./data";

const Tools: FC = () => {

    return (
        <Container>
            <TitleWrapper>{"Tools"}</TitleWrapper>
            <ToolTabs data={data}/>
        </Container>
    );
};

export default Tools;
