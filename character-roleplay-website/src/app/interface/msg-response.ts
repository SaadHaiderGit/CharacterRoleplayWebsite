import { Character } from "./character";
import { User } from "./user";

export interface MsgResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    msg: string;
    devMsg: string;
    data: {characters?: Character[], character?: Character, users?: User[], user?: User}
} 
