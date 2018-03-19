import { Injectable } from "@angular/core";

// service to add the user in the active_directory to the AMAZE Database
@Injectable()
export class ModalService {

    private addURL = "http://sbiwas8devv01.caremore.com:8080/amaze/api/v1.0/user_management/add_user";
    
    constructor() {}

    
}