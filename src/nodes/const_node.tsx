import { Node } from '../models/node';
import { Type } from '../models/type';

export const ConstNode = new Node(
    'Const',
    [],
    [
        {
            name: 'Value',
            type: new Type('number'),
        }
    ],
    (i, o) => {},
);