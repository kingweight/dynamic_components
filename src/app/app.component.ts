import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core'

import { ComponentA } from './component-a/component-a.component'
import { ComponentB } from './component-b/component-b.component'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy,AfterViewInit {
    
    title = 'dynamic component';

    componentList = new Array<ComponentRef<any>>();

    @ViewChild('container', { read: ViewContainerRef,static:true }) viewContainerRef: ViewContainerRef;

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

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        
    }

    ngAfterViewInit(): void {
        // for(let i = 0; i< 1000; i++)
        //     this.addComponent(0)
    }

    addComponent(selectedValue) {
        let component:any;
        if(selectedValue == 0){
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentA);
            // add the component to the view
            const componentRef = this.viewContainerRef.createComponent(componentFactory);
            (<ComponentA>componentRef.instance).changeDetectorRef.detectChanges();
            (<ComponentA>componentRef.instance).action.subscribe(()=>componentRef.destroy());
            (<ComponentA>componentRef.instance).name = "I'm Component A"
            this.componentList.push(componentRef);
        }else if(selectedValue == 1){
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentB);
            // add the component to the view
            const componentRef = this.viewContainerRef.createComponent(componentFactory);
            (<ComponentB>componentRef.instance).action.subscribe(()=>componentRef.destroy());
            this.componentList.push(componentRef);
        }
        
    }

    action(){

    }

    clearComponents(){
        this.viewContainerRef.clear();
    }

    ngOnDestroy(): void {
        if(this.componentList){
            this.componentList.forEach(componentRef=>{
                componentRef.destroy();
            })
        }
    }
}
