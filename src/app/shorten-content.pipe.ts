import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenContent'
})
export class ShortenContentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
