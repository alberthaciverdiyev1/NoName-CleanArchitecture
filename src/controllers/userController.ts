import { inject, injectable } from "inversify";
import { IUserInteractor } from "../interfaces/user/IUserInteractor";
import { INTERFACE_TYPE } from "../utils";
import { Response, Request } from "express";
import { User } from "../entities/User";

@injectable()
export class UserController {
    private interactor: IUserInteractor;
    constructor(
        @inject(INTERFACE_TYPE.UserInteractor) interactor: IUserInteractor) {
        this.interactor = interactor;
    }

    async Login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const token = await this.interactor.login(email, password);
            if (token) {
                return res.status(200).json(token);
            } else {
                return res.status(401).json({
                    message: "Invalid email or password"
                });
            }
        } catch (error) {
            return res.status(401).json({ message: error });
        }
    }

    async Register(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const result = await this.interactor.register(email, password);
            if (result) {
                return res.status(200).json({ message: "Register Success" });
            } else {
                return res.status(401).json({ message: "Register Failed" });
            }
        } catch (error) {
            return res.status(401).json({ message: error });
        }
    }
    async UpdateUser(req: Request, res: Response) {
        try {
            const { id, name, surname, phone, email, password, role, isActive, isBlocked } = req.body;
            const result = await this.interactor.updateUser(id, new User(id, name, surname, phone, email, password, role, isActive, isBlocked));
            if (result) {
                return res.status(200).json({ message: "Update Success" });
            } else {
                return res.status(401).json({ message: "Update Failed" });
            }
        } catch (error) {
            return res.status(401).json({ message: error });
        }
    }
    async DeleteUser(req: Request, res: Response) {
        try {
            const { id } = req.body;
            const result = await this.interactor.deleteUser(id);
            if (result) {
                return res.status(200).json({ message: "Delete Success" });
            } else {
                return res.status(401).json({ message: "Delete Failed" });
            }
        } catch (error) {
            return res.status(401).json({ message: error });
        }
    }
    async FindById(req: Request, res: Response) {
        try {
            const { id } = req.body;
            const result = await this.interactor.findById(id);
            if (result) {
                return res.status(200).json(result);
            } else {
                return res.status(401).json({ message: "Find Failed" });
            }
        } catch (error) {
            return res.status(401).json({ message: error });
        }
    }
    async FindByName(req: Request, res: Response) {
        try {
            const { name } = req.body;
            const result = await this.interactor.findByName(name);
            if (result) {
                return res.status(200).json(result);
            } else {
                return res.status(401).json({ message: "Find Failed" });
            }
        } catch (error) {
            return res.status(401).json({ message: error });
        }
    }
    async FindByPhone(req: Request, res: Response) {
        try {
            const { phone } = req.body;
            const result = await this.interactor.findByPhone(phone);
            if (result) {
                return res.status(200).json(result);
            } else {
                return res.status(401).json({ message: "Find Failed" });
            }
        } catch (error) {
            return res.status(401).json({ message: error });
        }
    }
    async ListAllUser(req: Request, res: Response) {
        try {
            const result = await this.interactor.listAllUser();
            if (result) {
                return res.status(200).json(result);
            } else {
                return res.status(401).json({ message: "Find Failed" });
            }
        } catch (error) {
            return res.status(401).json({ message: error });
        }
    }


}