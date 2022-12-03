import React, {FC, useState} from 'react';


//components
import Button from "../Button";
import Dropdown from "../Dropdown";

//style
import {
    Container,
    ButtonsWrapper,
    ProfileWrapper,
    SearchWrapper,
    Search,
    SearchIcon,
    IconContainer,
    BadgeWrapper,
    BadgeContainer,
    BadgeText
} from "./style";

//assets
import notification from "../../assets/images/notification.svg";
import WorkspaceLogo from '../../assets/images/workspace-icon.svg'

const Navbar: FC = () => {
    const [badgeCount, setBadgeCount] = useState<number>(100)

    return (
        <Container>
            <ButtonsWrapper>
                <Button/>
                <Dropdown values={["Kanban","Figma","Asana"]} label={"Kanban"}/>
                <Dropdown values={["Filter","No Filter","Daisy"]} label={"Filter"}/>
            </ButtonsWrapper>

            <ProfileWrapper>
                <SearchWrapper>
                    <Search  placeholder="Search ..."/>
                    <SearchIcon/>
                </SearchWrapper>

                <BadgeWrapper>
                    <BadgeContainer>
                        <BadgeText>{badgeCount > 99 ? "99+" : badgeCount}</BadgeText>
                    </BadgeContainer>
                    <IconContainer height={24} width={24} src={notification} alt="notification_icon"/>
                </BadgeWrapper>

                <IconContainer height={40} width={40} src={WorkspaceLogo} alt="profile_icon"/>

            </ProfileWrapper>
        </Container>
    );
};

export default Navbar;
