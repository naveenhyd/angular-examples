import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	//   template:`
	// 	<app-test [ParentName]='naveen'></app-test>
	//   `,
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-examples';
	public name = "naveen";
	
}
