import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    'name': 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any,start:number,limit:number) {
        if (value.length > limit)
            return value.substr(start, limit) + ' ...';
        else
            return value.substr(start,value.length);
    }

}