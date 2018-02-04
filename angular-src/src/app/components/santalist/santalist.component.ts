import { Component, OnInit } from '@angular/core';
import { SantaService } from '../../services/santa.service';
import { Santa } from '../../classes/santa';
import * as _ from 'underscore';
@Component({
  selector: 'app-santalist',
  templateUrl: './santalist.component.html',
  styleUrls: ['./santalist.component.css']
})
export class SantalistComponent implements OnInit {

	name:string;
	santas: Santa[]
	constructor(private santaService: SantaService) 
	{ 
		this.santas = santaService.santas;
	}

	ngOnInit() {
		
	}

	match() {
		console.log("Match worked");
		let x = {something:1};
		let y = {something:20};
		let f = {something:11};
		let g = {something:21};
		let h = {something:133};
		let z = [x, y,f,g,h];
		_.shuffle(this.santas);
		_.shuffle(z)
		console.log(z)
		console.log(_.size(this.santas));
	}

}
