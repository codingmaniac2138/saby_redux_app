<<<<<<< HEAD
/**
 * The Pipe to capitalize the string in the template
 */

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "capitalize" })
export class CapitalizePipe implements PipeTransform {
    transform(stringValue: string) {
        if (stringValue) {
            return stringValue.replace(/\w\S*/g, (txt) => {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
        return stringValue;
    }
=======
/**
 * The Pipe to capitalize the string in the template
 */

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "capitalize" })
export class CapitalizePipe implements PipeTransform {
    transform(stringValue: string) {
        if (stringValue) {
            return stringValue.replace(/\w\S*/g, (txt) => {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
        return stringValue;
    }
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
}