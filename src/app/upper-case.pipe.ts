import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'uppercase'
})
export class UpperCase implements PipeTransform {

    newValue: string;
    
    transform(value: string): string {
        var word = value.slice(0,1);
        var newWord = word.toUpperCase();
        return this.newValue = value.replace(word, newWord);
    }

}