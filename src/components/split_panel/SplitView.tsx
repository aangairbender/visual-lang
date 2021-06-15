import React from 'react';
import { useState } from 'react';

enum Orientation {
    Horizontal,
    Vertical,
}

interface SplitViewProps {
    orientation: Orientation,
    leftMinWidth: string,
    rightMinWidth: string,
    children: React.ReactNode,
}

export const SplitView = (props: SplitViewProps) => {
    if (React.Children.count(props.children) !== 2) {
        throw new Error("There must be exactly two children");
    }

    const [leftWidth, setLeftWidth] = useState(props.leftMinWidth);

    return (
        <React.Fragment></React.Fragment>
    );
};