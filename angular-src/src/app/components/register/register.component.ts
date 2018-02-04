import { Component, OnInit } from '@angular/core';
import { SantaService } from '../../services/santa.service' 
import { Santa } from '../../classes/santa';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	santa: Santa;
	constructor(private santaService: SantaService) { }

	ngOnInit() {
	}

	registerSanta(form: NgForm){
		this.santaService.addSanta(form.value);
	}
}
