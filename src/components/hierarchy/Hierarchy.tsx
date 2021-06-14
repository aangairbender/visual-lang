import React, { useState } from 'react';

import { Module } from '../../core/type_system/type'

interface HierarchyProps {
    rootModule: Module,
}

export const Hierarchy = (props: HierarchyProps) => (
    <div style={{backgroundColor: 'lightgray', display: 'inline-block', padding: '10px'}}>
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

    const offset = props.depth * 20; // px

    const collapseIcon = isCollapsed ? '➕' : '➖';

    return (
        <React.Fragment>
            {props.visible && (
                <div style={{marginLeft: `${offset}px`}} onClick={toggle}>
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