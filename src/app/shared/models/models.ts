export interface IEventRequest {
    title: string;
    description: string;
    date: string;
}

export interface IEventResponse extends IEventRequest{
    id: number;
}