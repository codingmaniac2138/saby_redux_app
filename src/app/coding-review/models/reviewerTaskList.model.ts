/**
 * The Model for the Reviewer Taks List
 */

export enum STATUS {
    NEW = "NEW",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}; 

interface IReviwerTaskList {
    status: STATUS;
    first_name: string;
    last_name: string;
    discharge_date: Date;
};

export class ReviewerTaskList implements IReviwerTaskList {
    public status: STATUS;
    public first_name: string;
    public last_name: string;
    public discharge_date: Date;

    constructor(status: string, first_name: string, last_name: string, discharge_date: Date) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.discharge_date = discharge_date;
        this.status = STATUS[status];
    }
}