import { ReactNode } from 'react';
export default interface IButton {
    visible?: boolean;
    width?: string;
    children: ReactNode;
}