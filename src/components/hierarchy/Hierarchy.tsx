import React, { useState } from 'react';

import { Module } from '../../core/type_system/type'
import './Hierarchy.scss'

interface HierarchyProps {
    rootModule: Module,
}

export const Hierarchy = (props: HierarchyProps) => (
    <div className='hierarchy'>
        <HierarchyNode
            module={props.rootModule}
            depth={0}
            visible={true}
        />
    </div>
);


interface HierarchyNodeProps {
    module: Module,
    depth: number,
    visible: boolean,
}

const HierarchyNode = (props: HierarchyNodeProps) => {
    const [isCollapsed, setCollapsedState] = useState(false);

    const toggle = () => setCollapsedState(!isCollapsed);

    const collapseIcon = isCollapsed ? '➕' : '➖';

    return (
        <React.Fragment>
            {props.visible && (
                <div
                    className={`hierarchy-node depth-${props.depth}`}
                    onClick={toggle}
                >
                    {`${collapseIcon} ${props.module.name}`}
                </div>
            )}
            {props.module.subModules.map((subModule, index) => (
                <HierarchyNode
                    key={`${subModule.name}_${props.depth + 1}_${index}`}
                    module={subModule}
                    depth={props.depth + 1}
                    visible={props.visible && !isCollapsed}
                />
            ))}
        </React.Fragment>
    );
};