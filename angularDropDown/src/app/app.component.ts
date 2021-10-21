import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
	constructor(private title: Title) {}

	ngOnInit() {
		this.title.setTitle('Angular Cascading or Dependent Dropdown');
	}
	
	selectedCountry: String = "--Choose Country--";
  
	Countries: Array<any> = [
		{ name: 'Germany', states: [ {name: 'berlin', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']}, {name: 'Munick', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']}, {name: 'Bon', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']}, {name: 'Anover', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },

		{ name: 'Spain', states: [ {name: 'Madrid', cities: ['Barcelona', 'Leinfelden-Echterdingen', 'Leinfelden-Echterdingen']}, {name: 'Barcelona', cities: ['Barcelona', 'Leinfelden-Echterdingen', 'Leinfelden-Echterdingen']}, {name: 'Ranada', cities: ['Barcelona', 'Leinfelden-Echterdingen', 'Leinfelden-Echterdingen']} ] },

		{ name: 'USA', states: [ {name: 'Washington DC', cities: ['Downers Grove', 'Leinfelden-Echterdingen', 'Leinfelden-Echterdingen']}, {name: 'Chicago', cities: ['Downers Grove', 'Leinfelden-Echterdingen', 'Leinfelden-Echterdingen']}, {name: 'Florida', cities: ['Downers Grove', 'Leinfelden-Echterdingen', 'Leinfelden-Echterdingen']}, {name: 'Alaska', cities: ['Downers Grove', 'Leinfelden-Echterdingen', 'Leinfelden-Echterdingen']} ] },

		{ name: 'Bangladesh', states: [ {name: 'Dhaka', cities: ['Dhaka', 'Narayangonj', 'Gazipur']}, {name: 'Noakhali', cities: ['Maijdee', 'Subarnachar', 'Sonaimuri', 'Islamgong bazar']}, {name: 'Rajshahi', cities: ['Boro Station', 'Bagmara', 'Baga', 'Putia']}, {name: 'Khulna', cities: ['Khulna', 'Shatkhira', 'Jeshore']} ] },
	];
  
    //states: Array<any>; //Angular 8
	states: Array<any> = []; //Angular 11

	//cities: Array<any>; //Angular 8
	cities: Array<any> = []; //Angular 11
	
	//changeCountry(country) { //Angular 8
	changeCountry(country: any) { //Angular 11
		//this.states = this.Countries.find(cntry => cntry.name == country).states; //Angular 8
		this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states; //Angular 11
	}

	//changeState(state) { //Angular 8
	changeState(state: any) { //Angular 11
		//this.cities = this.Countries.find(cntry => cntry.name == this.selectedCountry).states.find(stat => stat.name == state).cities; //Angular 8
		this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities; //Angular 11
	}
	
}