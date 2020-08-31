import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ItemModel } from './data.model';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	public items: ItemModel[] = [];

	private currentItem: ItemModel;

	private icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];

	constructor(private storage: Storage) {
		console.log('DataService::constructor | ');

		for (let i = 1; i < 11; i++) {
			this.items.push({
				id: i,
				title: 'Item ' + i,
				note: 'This is item #' + i,
				icon: this.icons[Math.floor(Math.random() * this.icons.length)]
			});
		}

		console.log('DataService::constructor | added ', this.items.length, ' items');
	}

	getItem(id): ItemModel {
		console.log('DataService::getItem | id=', id, typeof id);
		console.dir(this.items);

		var item=this.items.find(item => item.id === Number(id));
		console.log('DataService::getItem | found item=', item);
		console.dir(item);

		return item;
	}

	setCurrentItem(item: ItemModel) {
		this.currentItem = item;
	}
	add() {
		console.log('DataService::add | ');

		this.items.push({
			id: 0,
			title: 'Item ' + 0,
			note: 'This is item #' + 0,
			icon: this.icons[Math.floor(Math.random() * this.icons.length)]
		});
	}
	save() {
		console.log('DataService::save | items=', this.items);

		this.storage.set('data', this.items);
	}
	load() {
		console.log('DataService::load | items=', this.items);

		this.storage.get('data').then((items) => {
			this.items = items || [];
		});

		console.log('ListPage::load | items=', this.items);

	}
	delete(sliding_item, index) {
		console.log('DataService::delete | item=', index);
		this.items.splice(index, 1);
	}

}
