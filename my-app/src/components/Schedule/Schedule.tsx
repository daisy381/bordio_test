import React, {FC, useCallback, useRef, useState} from 'react';
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import {
    Column,
    ColumnTitle,
    Container,
    ColumnWrap,
    ColumnGrid,
    ScheduleItemWrapper,
    ScheduleItemDesc,
    ScheduleItemHours
} from "./style";


const tasksList = [
    { _id: 1, title: "Check email", status: "new_task" , color:"#ABE9CE", hours:"0:20h"},
    { _id: 2, title: "Compare PPC agencies and make a report for Steven", status: "new_task",color:"#D8DCFF",hours:"3:00h"},
    { _id: 3, title: "Meeting with Amanda (PR department)", status: "new_task" , color:"#ABE9CE",hours:"0:20h"},
    { _id: 4, title: "Get Patrick's approval for homepage new design", status: "scheduled", color:"#D8DCFF",hours:"0:30h"},
    { _id: 5, title: "Fifth Task", status: "scheduled" , color:"#FFDFBA",hours:"0:20h"},
    { _id: 6, title: "Sixth Task", status: "in_progress" , color:"#FEC6B7",hours:"0:20h"},
    { _id: 7, title: "Seventh Task", status: "in_progress" , color:"#D9E6A2",hours:"5:00h"},
    { _id: 8, title: "Eighth Task", status: "in_progress", color:"#FFDFBA",hours:"2:00h"},
    { _id: 9, title: "Ninth Task", status: "completed", color:"#F2BAE1",hours:"0:20h"},
    { _id: 10, title: "Tenth Task", status: "completed" , color:"#FFDFBA",hours:"0:20h"}
];

const channels = ["new_task", "scheduled", "in_progress", "completed"];

const labelsMap:any = {
    new_task: "New Task",
    scheduled: "Scheduled",
    in_progress: "In Progress",
    completed: "Completed"
};

const Schedule: FC = () => {
    const [tasks, setTaskStatus] = useState(tasksList);

    const changeTaskStatus = useCallback(
        (id:number, status:string) => {
            let task:any = tasks.find(task => task._id === id);
            const taskIndex = tasks.indexOf(task);
            task = { ...task, status };
            let newTasks = update(tasks, {
                [taskIndex]: { $set: task }
            });
            setTaskStatus(newTasks);
        },
        [tasks]
    );

    return (
        <Container>
            <DndProvider backend={HTML5Backend}>
                {channels.map(channel => (
                    <ColumnWrap key={channel}>
                        <ColumnTitle>{labelsMap[channel]}</ColumnTitle>
                        <ScheduleColumn
                            key={channel}
                            status={channel}
                            changeTaskStatus={changeTaskStatus}
                        >
                            <Column>
                                {tasks
                                    .filter(item => item.status === channel)
                                    .map(item => (
                                        <ScheduleItem key={item._id} id={item._id} color={item.color} status={item.status}>
                                            <ScheduleItemDesc status={item.status}>{item.title}</ScheduleItemDesc>
                                            <ScheduleItemHours status={item.status}>{item.hours}</ScheduleItemHours>
                                        </ScheduleItem>
                                    ))
                                }
                            </Column>
                        </ScheduleColumn>

                    </ColumnWrap>
                ))}
            </DndProvider>
        </Container>
    );
};



export default Schedule;

const ScheduleColumn = ({ status, changeTaskStatus, children }:any) => {
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: "card",
        drop:(item:any)=>changeTaskStatus(item.id,status)
    });
    drop(ref);
    return <ColumnGrid ref={ref}> {children}</ColumnGrid>;
};

const ScheduleItem = ({ id, children ,color, status}:any) => {
    const ref = useRef(null);
    const [{isDragging}, drag] = useDrag({
        type: 'card',
        item: {type: "card", id},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    const opacity = isDragging ? 0.4 : 1;
    drag(ref);
    return (
        <ScheduleItemWrapper ref={ref} style={{opacity}} color={color} status={status}>
            {children}
        </ScheduleItemWrapper>
    );
}