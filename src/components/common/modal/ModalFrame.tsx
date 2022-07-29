import React, { ComponentType } from 'react';
import * as M from './ModalFrame.style';

const ModalFrame = ({closable,Com} : {closable:boolean,Com: ComponentType}) => {
    return (
        <M.ModalWrapper>
            <div>
                <Com/>
            </div>
        </M.ModalWrapper>
    );
};

export default ModalFrame;