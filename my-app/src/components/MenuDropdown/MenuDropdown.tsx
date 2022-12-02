import React, {FC, useRef, useState} from 'react';

//components

//styles
import {
    Container,
    TitleWrapper,
    TitleContent,
    TitleButton,
    MenuItemWrapper,
    MenuItem,
    LinkContainer
} from "./style";

//types
import {DropdownProps} from "./types";


const MenuDropdown: FC<DropdownProps> = ({title,items}) => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const contentHeight = isOpen ? contentRef?.current?.scrollHeight : 0;

    const toggleOpen = ():void => {
        setIsOpen(!isOpen)
    }

    return (
        <Container>
            <TitleWrapper>
                <TitleButton isOpen={isOpen} onClick={toggleOpen}/>
                <TitleContent>{title}</TitleContent>
            </TitleWrapper>

            <MenuItemWrapper maxHeight={contentHeight}>
                <MenuItem ref={contentRef}>
                    {items.map((item,index)=>(
                        <LinkContainer to="#" key={index}>{item.title}</LinkContainer>
                    ))}
                </MenuItem>
            </MenuItemWrapper>
        </Container>
    );
};

export default MenuDropdown;
