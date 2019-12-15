import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { asyncScheduler, asapScheduler, animationFrameScheduler, queueScheduler } from 'rxjs'

@Component({
    selector: 'app-component-b',
    templateUrl: './component-b.component.html',
    styleUrls: ['./component-b.component.scss']
})
export class ComponentB implements OnInit {

    @Output() action = new EventEmitter();

    ngOnInit() {}

    remove() {
        this.action.emit();
    }

}
