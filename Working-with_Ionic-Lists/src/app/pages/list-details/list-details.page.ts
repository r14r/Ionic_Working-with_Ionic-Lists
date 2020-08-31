import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DataService } from 'src/app/services/data/data.service';

@Component({
	selector: 'app-list-details',
	templateUrl: './list-details.page.html',
	styleUrls: ['./list-details.page.scss'],
})
export class ListDetailsPage implements OnInit {
	item: any;

	currentYear: Number = new Date().getFullYear();
	edit: boolean = null;

	form: FormGroup;

	constructor(
		private route: ActivatedRoute,
		private dataService: DataService,
		public formBuilder: FormBuilder
	) {
		console.log('ListDetailsPage::constructor | ');

		this.edit = false;
	}

	ngOnInit() {
		let id = this.route.snapshot.paramMap.get('id');
		this.item = this.dataService.getItem(id);
		console.log('ListDetailsPage::ngOnInit | item=', this.item);
	}

	button_edit(toggle) {
		console.log('ListDetailsPage::button_edit | item=', this.item);

		if (this.edit == true) {
		}
		this.edit = toggle;
	}

	button_submit(formValue: any) {
		console.log(formValue);
	}

}
