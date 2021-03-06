import { observable } from 'mobx'

export class Visual {
    @observable x: number;
    @observable y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
