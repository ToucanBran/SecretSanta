import { Injectable } from '@angular/core';
import { Santa } from '../classes/santa';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SantaService {

	santas: Santa[];
	matched = false;
	notifyUrl: 'http://localhost:3000/santas/notify';

	constructor(private http: HttpClient) {
		this.santas = [];
	}

	addSanta(santa) {
		this.santas.push(santa);
	}

	setMatches(santas) {
		this.matched = true;
		this.santas = santas;
	}

	getSantas(): Santa[] {
		return this.santas;
	}
	notify(santaList) {
		const headers = new HttpHeaders()
			.set('Content-Type', 'application/json');
		let data = { santas: santaList };
		let message;
		this.http.post(this.notifyUrl, JSON.stringify(data), {
			headers: headers
		}).subscribe(msg => {
			message = msg;
		});

		return message;
	}

	hasMatched(): boolean {
		return this.matched;
	}

	clear() {
		this.matched = false;
		this.santas.length = 0;
	}
}
