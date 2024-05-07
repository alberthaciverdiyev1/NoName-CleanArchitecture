import { IHash } from "../interfaces/libs/IHash";
import bcrypt from 'bcrypt'

export class Hash implements IHash {
    async hashPassword(password: string): Promise<string> {
        const result = await bcrypt.hash(password, 10);
        if (result){
            return result;
        }
        throw new Error ("Password could not be hashed");
    }
    comparePassword(password: string, hash: string): Promise<boolean> {
        const result = bcrypt.compare(password, hash);
        return result;
    }
}

