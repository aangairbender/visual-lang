import { Type } from './type';

export class Node {
    title: string;
    inputs: NodeIO[];
    outputs: NodeIO[];
    runner: (inputs: any[], outputs: any[]) => void;

    constructor(title: string, inputs: NodeIO[], outputs: NodeIO[], runner: (inputs: any[], outputs: any[]) => void) {
        this.title = title;
        this.inputs = inputs;
        this.outputs = outputs;
        this.runner = runner;
    }
}

export interface NodeIO {
    name: string;
    type: Type;
}
