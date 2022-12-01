export type DropdownItemProps = {
    title:string,
    link:string,
}
export type DropdownProps = {
    title?:string,
    items:DropdownItemProps[]
}

export interface ItemOpenProps {
    maxHeight?:number
}

export interface ItemButtonProps {
    isOpen:boolean
}

export interface MenuItemProps {
    ref : any
}
