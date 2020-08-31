import { Component, OnInit } from '@angular/core';

import { ItemModel } from 'src/app/services/data/data.model';

@Component({
	selector: 'app-samples-forms',
	templateUrl: './samples-forms.page.html',
	styleUrls: ['./samples-forms.page.scss'],
})
export class SamplesFormsPage implements OnInit {

	item: ItemModel;

	constructor() { }

	ngOnInit() {
		this.item = new ItemModel(1, 'Titel', 'Notiz', 'list');
	}

}
