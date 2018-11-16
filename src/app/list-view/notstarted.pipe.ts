import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notstarted'
})
export class NotstartedPipe implements PipeTransform {

  transform(notes: any[], args: any[]): any {
    return notes.filter(item => item.state === args);
}

}
