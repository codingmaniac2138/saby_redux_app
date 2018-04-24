/**
 * The User Model that account for the Logged In User.
 */

export class User {
    public caremoreId: string;
    public password: string;
    public username: string;
    public first_name: string;
    public last_name: string;
    public actor?: string;
    public modules?: Array<string>;
    public roles?: Array<any>;

    constructor(){}
}