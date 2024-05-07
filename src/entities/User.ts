export class User {
    constructor(
        public id?: number,
        public name?: string,
        public surname?: string,
        public phone?: string,
        public email?: string,
        public password?: string,
        public role?: string,
        public isActive?: boolean,
        public isBlocked?: boolean,
        public createdAt?: Date,
        public updatedAt?: Date | null,
        public deletedAt?: Date | null,
        public updatedBy?: number,
        public deletedBy?: number | null,
    ){}
}