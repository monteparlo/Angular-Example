import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightlightCompletedTodo]'
})
export class HightlightCompletedTodoDirective {
  isCompleted = input(false);
  constructor() {}

  el = inject(ElementRef);
  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.style.color = '#dc757d';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
    }
  })
}
