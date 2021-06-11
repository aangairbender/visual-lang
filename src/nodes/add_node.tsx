import { Node } from '../models/node';
import { Type } from '../models/type';

export const AddNode = new Node(
    'Add',
    [
        {
            name: 'A',
            type: new Type('number'),
        },
        {
            name: 'B',
            type: new Type('number'),
        }
    ],
    [
        {
            name: 'Result',
            type: new Type('number'),
        }
    ],
    (i: any[], o: any[]) => {o[0] = i[0] + i[1]},
);