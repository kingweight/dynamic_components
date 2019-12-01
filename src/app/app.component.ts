import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core'

import { ComponentA } from './component-a/component-a.component'
import { ComponentB } from './component-b/component-b.component'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'dynamic component';

    @ViewChild('container', { read: ViewContainerRef,static:false }) container: ViewContainerRef;

    selectedValue: string;
    selectedCar: string;

    components = [{
            value: 0,
            viewValue: 'Component A'
        },
        {
            value: 1,
            viewValue: 'Component B'
        }
    ];

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    addComponent(selectedValue = 0) {
        let component:any;
        if(selectedValue == 0){
            component = ComponentA;
            console.log("add component A");
        }else if(selectedValue == 1){
            component = ComponentB;
            console.log("add component B");
        }

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        // add the component to the view
        const componentRef = this.container.createComponent(componentFactory);
    }

}
