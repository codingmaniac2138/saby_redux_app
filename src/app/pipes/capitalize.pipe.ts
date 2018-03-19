import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "capitalize" })
export class CapitalizePipe implements PipeTransform {
    transform(stringValue: string) {
        if (stringValue) {
            return stringValue.charAt(0).toUpperCase() + stringValue.slice(1);
        }
        return stringValue;
    }
}