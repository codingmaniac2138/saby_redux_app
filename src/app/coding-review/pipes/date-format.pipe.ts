/**
 * The Pipe to format the date object into string value
 */

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "formatdate" })
export class FormatDate implements PipeTransform {
    transform(dateObject: Date): string {
        return ((dateObject.getMonth() + 1) + "/" + dateObject.getDate() + "/" + dateObject.getFullYear());
    }
}