export class User {

    private _email: string;
    private _password: string;
    private _roles: string[];

    constructor(email, password, roles) {
        this._email = email;
        this._password = password;
        this._roles = roles;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    public get roles(): string[] {
        return this._roles;
    }
    public set roles(value: string[]) {
        this._roles = value;
    }

  
}