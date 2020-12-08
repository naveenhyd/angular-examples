import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-test',
	//   templateUrl: './test.component.html',
	template: `
	test works
	// <h2>{{'hello '+name}}</h2>
	// <h3>{{name}}</h3>
	<button (click)="fireEvent()">fire event</button>
	`,
	styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

	@Input('ParentName') public name;
	@Output() public childMsg = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

	fireEvent() {
		this.childMsg.emit('child message');
	}

}
