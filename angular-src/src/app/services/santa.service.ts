import { Injectable } from '@angular/core';
import { Santa } from '../classes/santa';
@Injectable()
export class SantaService {

	santas: Santa[];

	constructor() { 
		this.santas = [];
	}

	addSanta(santa) {
		this.santas.push(santa);
	}
}
