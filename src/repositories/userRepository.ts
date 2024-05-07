import { User } from "../entities/User";
import { IUserRepository } from "../interfaces/user/IUserRepository";

export class UserReopsitory implements IUserRepository{
    login(email: string): Promise<User> {
        throw new Error("Method not implemented.");
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