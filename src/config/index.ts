<<<<<<< HEAD
/**
 * Config file that provides Dev environment, Production environment, Test environment and Statging environment
 */

import { environment } from "../environments/environment";
import { DEV_CONFIG } from "./dev.config"
import { PROD_CONFIG } from "./prod.config";
import { TEST_CONFIG } from "./test.config";
import { STAGE_CONFIG } from "./stage.config";

export let CONFIG: any;

if(environment.production) {
    console.log("Inside the config file and in production mode");
    CONFIG = PROD_CONFIG;
}
else if(environment.development){
    console.log("Inside the config file and in development mode");
    CONFIG = DEV_CONFIG;
}
else if(environment.testing) {
    console.log("Inside the config file and in testing mode");
    CONFIG = TEST_CONFIG;
} 
else if(environment.stage) {
    console.log("Inside the config file and in staging mode");
    CONFIG = STAGE_CONFIG;
=======
/**
 * Config file that provides Dev environment, Production environment, Test environment and Statging environment
 */

import { environment } from "../environments/environment";
import { DEV_CONFIG } from "./dev.config"
import { PROD_CONFIG } from "./prod.config";
import { TEST_CONFIG } from "./test.config";
import { STAGE_CONFIG } from "./stage.config";

export let CONFIG: any;

if(environment.production) {
    console.log("Inside the config file and in production mode");
    CONFIG = PROD_CONFIG;
}
else if(environment.development){
    console.log("Inside the config file and in development mode");
    CONFIG = DEV_CONFIG;
}
else if(environment.testing) {
    console.log("Inside the config file and in testing mode");
    CONFIG = TEST_CONFIG;
} 
else if(environment.stage) {
    console.log("Inside the config file and in staging mode");
    CONFIG = STAGE_CONFIG;
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
}