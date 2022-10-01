export class PeriodEndedEvent {
    public  riddleId
    constructor(param: { riddleId: string; }) {
        this.riddleId = param.riddleId
    }
}