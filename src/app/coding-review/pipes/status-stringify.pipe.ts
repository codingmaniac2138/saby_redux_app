/**
 * The Pipe to lowercase the STATUS Enum string value and remove the _ from the string
 */
import { Pipe, PipeTransform } from "@angular/core";
// import { STATUS } from "../model/reviewerTaskList.model";

@Pipe({ name: "stringifystatus" })
export class StringifyStatus implements PipeTransform {
    transform(status: string): string {
        // let newString = status.toLowerCase();
        let newString = status.replace(/_/, " ");
        return newString;
    }
}