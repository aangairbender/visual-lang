import React from 'react';

import { Node } from '../../models/node';

interface PlacedNode {
    node: Node,
    x: number,
    y: number,
}

type EditorProps = {
    placedNodes: PlacedNode[]
};

export const Editor = (props: EditorProps) => {
    const canvas = React.useRef<HTMLCanvasElement>(null);
    let ctx: CanvasRenderingContext2D | null;

    React.useEffect(() => {
        if (canvas && canvas.current) {
            // get context of the canvas
            ctx = canvas.current.getContext("2d");
        }
    });

    const drawNode = (placedNode: PlacedNode, ctx: CanvasRenderingContext2D) => {
        const headerSize = ctx.measureText(placedNode.node.title);
        const inputSizes = placedNode.node.inputs.map(input => ctx.measureText(input.name));
        const outputSizes = placedNode.node.outputs.map(output => ctx.measureText(output.name));
        const conSize = 16;

        const width = Math.max(
            headerSize.width,
            Math.max(...inputSizes.map(sz => sz.width)) + conSize +
            Math.max(...outputSizes.map(sz => sz.width)) + conSize,
        );
    };

    React.useEffect(() => {
        if (!ctx) return;

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        props.placedNodes.forEach(placedNode => {
            if (!ctx) return;
            drawNode(placedNode, ctx);
        });
    });

    return (
        <div className='editor'>
            <canvas ref={canvas}></canvas>
        </div>
    );
}