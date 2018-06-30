import { Injectable } from '@angular/core';

@Injectable()
export class SharedData {
	data = {
		app: {
            name: 'GoFutsal',
            creator: {
                name: "Marudi Tri Subakti",
                email: "marudits@gmail.com"
            },
            copyright: {
                year: "2018"
            }
		},
		schedule: [],
		user: null
	}

	constructor() {
	}

	clearData() {
		sessionStorage.clear();
		
		this.data = {
			app: this.data.app,
            schedule: [],
            user: null
		}

		this.setData('app', this.data.app)
	}

	getData(key: string) {
		let data = JSON.parse(sessionStorage.getItem('data'));

		if (data) {
			this.data = data;
		}

		return this.data[key];
	}

	setData(key: string, data: Object) {
		this.data[key] = data;
		sessionStorage.setItem('data', JSON.stringify(this.data));
	}
}