// Create new Component

import { Component } from "@angular/core";

@Component({
    selector: 'app-test',
    templateUrl:'./test.component.html',
    styleUrls:['./test.component.css']
})

/**    // html css in Same file

@Component ({
    selector:'app-test',
    template:`
    <h1>Welcome to Test Component - From same file</h1>
    <p>This is a test Component that was created manually</p>
    `,
    styles:['h1 {color: red}']
})

*/

export class TestComponent{         // have to mention in app.module.ts under declarations

}