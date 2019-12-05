import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionFormsRequestUpdateField } from '../store/actions/forms.actions';

interface BindInput {
  name: string;
  field: string;
}
@Directive({
  selector: '[hgFormBindInput]'
})
export class HgFormBindInputDirective implements OnInit {
  @Input() vfHgFormBindInput: BindInput;
  constructor(
    private eleRef: ElementRef,
    private store: Store<any>
  ) {
  }

  ngOnInit() {
    this.eleRef.nativeElement.addEventListener('input', (event) => {
      const value = this.eleRef.nativeElement.value;
      this.store.dispatch(new ActionFormsRequestUpdateField({
        nameOfForm: this.vfHgFormBindInput.name,
        field: this.vfHgFormBindInput.field,
        value }));
    });
  }
}
