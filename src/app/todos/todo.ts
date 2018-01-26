export class Todo {
    constructor (
        public _id: number,
        public text: string,
        public completed?: boolean,
        public completedAt?: number
    ) {}
}
