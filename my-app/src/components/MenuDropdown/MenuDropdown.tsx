import React, {FC, useState} from 'react';

import {
    Container,
    TitleWrapper,
    TitleContent,
    TitleButton,
    MenuItemWrapper
} from "./style";
import MenuItem from "./MenuItem";


//types
type DropdownItemProps = {
    title:string,
    link:string,
}
type DropdownProps = {
    title?:string,
    items:DropdownItemProps[]
}

const MenuDropdown: FC<DropdownProps> = ({title,items}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = ():void => {
        setIsOpen(!isOpen)
    }

    const Items = items.map((item,index)=>(
        <MenuItem label={item.title} key={index}/>
    ))

    return (
        <Container>
            <TitleWrapper>
                <TitleButton isOpen={isOpen} onClick={toggleOpen}/>
                <TitleContent>{title}</TitleContent>
            </TitleWrapper>

            {
                isOpen && (
                    <MenuItemWrapper isOpen={isOpen}>
                        {Items}
                    </MenuItemWrapper>

                )
            }


        </Container>
    );
};

export default MenuDropdown;
