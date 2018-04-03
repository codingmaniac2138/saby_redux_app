import { Injectable } from "@angular/core";

// service to add the user in the active_directory to the AMAZE Database
@Injectable()
export class ModalService {

    private addURL = "/amaze/api/v1.0/user_management/add_user";
    
    constructor() {}

    
}