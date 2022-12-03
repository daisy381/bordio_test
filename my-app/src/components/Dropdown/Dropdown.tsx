import React, {FC, useRef, useState} from "react";

import {
    Container,
    DropdownIcon,
    DropdownTitle,
    DropdownWrapper,
    DropDownListContainer,
    ListItem,
    DropDownList
} from "./style";
import arrow from '../../assets/images/Arrows1.svg';

interface DropdownProps {
    label:string
    values:string[];
}

const Dropdown: FC<DropdownProps> = ({values,label}) => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [stateLabel, setStateLabel] = useState<string>(label);

    const contentHeight = isOpen ? contentRef?.current?.scrollHeight : 0;


    const toggling = ():void => setIsOpen(!isOpen);

    const handleChange = (value:string):void => {
        setStateLabel(value);
        setIsOpen(!isOpen)
    }

    return (
        <Container>
            <DropdownWrapper onClick={toggling}>
                <DropdownTitle>{stateLabel}</DropdownTitle>
                <DropdownIcon src={arrow} isOpen={isOpen} alt="dropdown_icon"/>
            </DropdownWrapper>

            <DropDownListContainer maxHeight={contentHeight}>
                <DropDownList ref={contentRef}>
                    {
                        values.map((item,index)=>(
                            <ListItem key={index} onClick={()=>handleChange(item)}>{item}</ListItem>
                        ))
                    }
                </DropDownList>
            </DropDownListContainer>


        </Container>
    )
}

export default Dropdown