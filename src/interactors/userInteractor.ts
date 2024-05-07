import { inject, injectable } from "inversify";
import { User } from "../entities/User";
import { IUserInteractor } from "../interfaces/user/IUserInteractor";
import { INTERFACE_TYPE } from "../utils";
import { IUserRepository } from "../interfaces/user/IUserRepository";
import { IToken } from "../interfaces/libs/IToken";
import { IHash } from "../interfaces/libs/IHash";

@injectable()
export class UserInteractor implements IUserInteractor {
    private repository: IUserRepository;
    private token: IToken;
    private hash: IHash;
    constructor(
        @inject(INTERFACE_TYPE.UserRepository) userRepository: IUserRepository,
        @inject(INTERFACE_TYPE.Token) token: IToken,
        @inject(INTERFACE_TYPE.Hash) hash: IHash) {
        this.repository = userRepository;
        this.token = token;
        this.hash = hash;
    }
    async login(email: string, password: string): Promise<string> {
        const user = await this.repository.login(email);
        if (user) {
            const isCorrect = await this.hash.comparePassword(password, user.password ?? '')
            if (isCorrect) {
                const token = await this.token.generateToken(user);
                return token;
            } else {
                throw new Error("Email or password is incorrect");
            }

        } else {
            throw new Error("User not found");
        }
    }
    register(email: string, password: string): Promise<String> {
        throw new Error("Method not implemented.");
    }
    updateUser(id: Number, user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: Number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    findByPhone(phone: string): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    listAllUser(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
}