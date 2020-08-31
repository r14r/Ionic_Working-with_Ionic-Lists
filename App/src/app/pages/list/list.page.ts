import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

import { DataService } from 'src/app/services/data/data.service';
import { ItemModel } from 'src/app/services/data/data.model';

@Component({
	selector: 'app-list',
	templateUrl: 'list.page.html',
	styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

	allowReorder: boolean = true;

	private selectedItem: any;
	private icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];
	public items: ItemModel[] = [];

	constructor(
		private router: Router,
		private storage: Storage,
		private dataService: DataService
	) {
		console.log('ListPage::constructor | ');

		this.items = this.dataService.items;
	}

	ngOnInit() {
		console.log('ListPage::ngOnInit | ');
	}

	button_reorder() {
		this.allowReorder = !this.allowReorder;
		console.log('ListPage::button_reorder | allowReorder=', this.allowReorder);
	}

	button_add() {
		console.log('ListPage::button_add | ');

		this.items.push({
			id: 0,
			title: 'Item ' + 0,
			note: 'This is item #' + 0,
			icon: this.icons[Math.floor(Math.random() * this.icons.length)]
		});
	}
	button_save() {
		this.save();
	}
	button_refresh() {
		this.load();
	}
	button_delete(sliding_item, index) {
		console.log('ListPage::button_delete | item=', index);
		this.items.splice(index, 1);

		this.close_sliding_item(sliding_item)
	}

	close_sliding_item(sliding_item) {
		sliding_item.close();
	}
	reorderArray(array: any[], indexes: { from: number, to: number }): any[] {
		console.log('SamplesListReorderPage::reorderArray | ');

		const element = array[indexes.from];
		array.splice(indexes.from, 1);
		array.splice(indexes.to, 0, element);
		return array;
	}

	reorderItems(event) {
		console.log('ListPage::reorderItems | indexes=', event);

		this.items = this.reorderArray(this.items, event.detail);

		//
		event.detail.complete();
	}

	save() {
		console.log('ListPage::save | items=', this.items);

		this.storage.set('data', this.items);
	}

	load() {
		console.log('ListPage::load | items=', this.items);

		this.storage.get('data').then((items) => {
			this.items = items || [];
		});

		console.log('ListPage::load | items=', this.items);

	}

	navigateTo(item) {
		this.dataService.setCurrentItem(item);
		this.router.navigateByUrl('list-details/' + item.id);
	}
}
