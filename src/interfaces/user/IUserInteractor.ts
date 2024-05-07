import { User } from "../../entities/User";

export interface IUserInteractor {
    login(email: string, password: string): Promise<String>
    register(email: string, password: string): Promise<String>
    updateUser(id:Number,user: User): Promise<User>
    deleteUser(id:Number): Promise<String>
    findById(id: number): Promise<User>
    findByName(name: string): Promise<User[]>
    findByPhone(phone: string): Promise<User[]>
    listAllUser(): Promise<User[]>

}