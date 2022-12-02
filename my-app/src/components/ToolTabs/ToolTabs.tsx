import React, {FC, useState} from 'react';

import {
    Container,
    Tab,
    TabIcon,
    TabTitle,
    Indicator
} from "./style";

type ToolTabsProps = {
    data: any[]
}

const ToolTabs: FC<ToolTabsProps> = ({data}) => {

    const [activeTab , setActiveTab ] = useState<string>("Schedule");

    return (
        <Container>
            {
                data.map(({icon,title},index) =>(
                    <Tab
                        className={title === activeTab ? "active" : ""}
                        key={index}
                        onClick={()=>setActiveTab(title)}
                    >
                        <TabIcon src={icon}/>
                        <TabTitle className={title === activeTab ? "active" : ""}>{title}</TabTitle>
                    </Tab>
                ))
            }
            <Indicator/>
        </Container>
    );
};

export default ToolTabs;
