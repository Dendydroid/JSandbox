
export interface IException
{
    getDebugData(): object;

    throw(err: object, message: string, terminate: boolean): void;
}
