import { injectable } from "inversify";
import { IToken } from "../interfaces/libs/IToken";
import jwt from "jsonwebtoken";

@injectable()
export class Token implements IToken {
    async generateToken(data: any): Promise<string> {
        const token = await jwt.sign(data, 'hiidentity', { expiresIn: '1h' });
        return token;
    }
    async verifyToken(token: string): Promise<any> {
        const data = await jwt.verify(token, 'hiidentity');
        return Promise.resolve(data);;
    }

}