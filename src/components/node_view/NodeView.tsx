import React from 'react';

import { Node } from '../../models/node';

interface NodeViewProps {
    node: Node,
    x: number,
    y: number,
}

export const NodeView = (props: NodeViewProps) => (
    <div className='node'>
        <Header node={props.node}/>
        <IO node={props.node}/>
    </div>
);

interface Props {
    node: Node,
};

const Header = ({ node }: Props) => (
    <div className='header'>{node.title}</div>
);

const IO = ({ node }: Props) => (
    <div className='io'>
        <InputList node={node} />
        <OutputList node={node} />
    </div>
);

const InputList = ({ node }: Props) => (
    <div className='input-list'>
        {node.inputs.map((input, index) => (
            <div className='input' key={index}>
                {input.name}
            </div>
        ))}
    </div>
);

const OutputList = ({ node }: Props) => (
    <div className='output-list'>
        {node.outputs.map((output, index) => (
            <div className='output' key={index}>
                {output.name}
            </div>
        ))}
    </div>
);