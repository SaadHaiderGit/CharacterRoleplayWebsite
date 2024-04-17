import { Character } from "./character";

export interface MsgResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    msg: string;
    devMsg: string;
    data: {characters?: Character[], character?: Character}
}
