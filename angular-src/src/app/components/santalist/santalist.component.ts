import { Component, OnInit } from '@angular/core';
import { SantaService } from '../../services/santa.service';
import { UtilityService } from '../../services/utility.service';
import { Santa } from '../../classes/santa';
import * as _ from 'underscore';

@Component({
  selector: 'app-santalist',
  templateUrl: './santalist.component.html',
  styleUrls: ['./santalist.component.css']
})
export class SantalistComponent implements OnInit {

	name:string;
	santas: Santa[];
	matched:boolean;
	constructor(private santaService: SantaService, private utilityService: UtilityService) 
	{ 
		this.santas = santaService.santas;
	}

	ngOnInit() {
		
	}

	match() {
		let randomMatches = [];
		for (var i = 0; i < this.santas.length; i++)
		{
			randomMatches.push(i);
		}
		_.shuffle(randomMatches);
		
		this.santas.forEach((randomSanta, index) => {
			if (index == this.santas.length - 1)
				randomSanta.matchedName = this.santas[0].name;
			else
				randomSanta.matchedName = this.santas[index + 1].name
		});
		this.matched = true;
	}

	notify() {
		console.log(this.santaService.notify(this.santas));
	}

	hasMatched() {
		return this.matched;
	}

	hasSantas() {
		return this.santas.length > 1;
	}

}
