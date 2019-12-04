import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
    selector: 'app-component-a',
    templateUrl: './component-a.component.html',
    styleUrls: ['./component-a.component.scss']
})
export class ComponentA implements OnInit {

    constructor() {}

    @Output() action = new EventEmitter();

    ngOnInit() {}

    remove() {
        this.action.emit();
    }

}
