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
	constructor(private santaService: SantaService, private utilityService: UtilityService) 
	{ 
	}

	ngOnInit() {
		this.santas = this.santaService.getSantas();
	}

	match() {
		let randomMatches = [];
		let santas = this.santaService.getSantas();
		for (var i = 0; i < santas.length; i++)
		{
			randomMatches.push(i);
		}
		_.shuffle(randomMatches);
		
		santas.forEach((randomSanta, index) => {
			if (index == santas.length - 1)
				randomSanta.matchedName = santas[0].name;
			else
				randomSanta.matchedName = santas[index + 1].name
		});
		this.santaService.setMatches(santas);
	}

	notify() {
		console.log("");
	}

	clear() {
		this.santaService.clear();
	}

	hasMatched() {
		return this.santaService.hasMatched();
	}

	hasSantas() {
		return this.santaService.getSantas().length > 0;
	}

}
