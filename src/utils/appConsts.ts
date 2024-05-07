import { Hash } from "crypto";

export const INTERFACE_TYPE = {
    UserRepository: Symbol.for("IUserRepository"),
    UserInteractor: Symbol.for("IUserInteractor"),
    UserController: Symbol.for("UserController"),
    Token: Symbol.for("IToken"),
    Hash:Symbol.for("IHash"),
}