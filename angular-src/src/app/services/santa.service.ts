import { Injectable } from '@angular/core';
import { Santa } from '../classes/santa';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SantaService {

	santas: Santa[];
	notifyUrl: string = 'http://localhost:3000/santas/notify';

	constructor(private http: HttpClient) { 
		this.santas = [];
	}

	addSanta(santa) {
		this.santas.push(santa);
	}

	notify(santaList) {
		const headers = new HttpHeaders()
			.set('Content-Type', 'application/json');
		let data = {santas: santaList};	
		let message;
		this.http.post(this.notifyUrl, JSON.stringify(data), {
			headers: headers
		}).subscribe(msg => {
			message = msg;
		});

		return message;
	}

	clear() {
		this.santas.length = 0;
	}
}
