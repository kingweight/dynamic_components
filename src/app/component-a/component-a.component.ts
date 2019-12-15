import { Component, EventEmitter, OnInit, Output, Input,ChangeDetectorRef } from '@angular/core'

@Component({
    selector: 'app-component-a',
    templateUrl: './component-a.component.html',
    styleUrls: ['./component-a.component.scss']
})
export class ComponentA implements OnInit {

    constructor(public changeDetectorRef:ChangeDetectorRef) {}

    @Input() name = "I'm Component A"

    @Output() action = new EventEmitter();

    ngOnInit() {}

    remove() {
        this.action.emit();
    }

}
