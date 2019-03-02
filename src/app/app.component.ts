import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './open.html',
  styleUrls: ['./style.css'],
})

export class AppComponent {
  title = 'Weather';
  userPosition:any ;
  weatherJson: any;
  
  LondonJson: any;
  NYJson:any;
  SingaporeJson: any;

  Place: string;
  Temp: any;
  Pressure: any;
  Humidity: any;
  Mintemp: any;
  Maxtemp: any;
  Desc: string;
  Speed: any;

  lonCity:String;
  lonTemp: any;
  lonPressure: any;
  lonHumidity: any;
  lonMintemp: any;
  lonMaxtemp: any;
  lonDesc: any;
  lonSpeed: any;

  sgCity: any;
  sgTemp: any;
  sgPressure: any;
  sgHumidity: any;
  sgMintemp: any;
  sgMaxtemp: any;
  sgDesc: any;
  sgSpeed: any;
  
  nyCity: any;
  nyTemp: any;
  nyPressure: any;
  nyHumidity: any;
  nyMintemp: any;
  nyMaxtemp: any;
  nyDesc: any;
  nySpeed: any;
 //For HttpClient (need to check exact functionality)
 constructor(private httpClient: HttpClient){
 }

 //Getting city name as input from html
  onSubmit(data)
  {
    console.log(data.cityName);
  }

//On opening or initialization of webpage, asks for user location to display weather conditions
  ngOnInit(){
    this.getUserLocation();
    this.getLondonLocation();
    this.getNyLocation();
    this.getSingaporeLocation();
  }

//Gets user location
  getUserLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos)=>{
        this.userPosition = pos;
        this.weatherData(pos); 
      });
    }
    else{
      alert('Browser doesnt support location based services.');
    }
  }

//Obtain weather details in JSON format
  weatherData(pos){
    let api_url = `https://api.openweathermap.org/data/2.5/weather?appid=40d8aa34748abbf7f5f10df4edb61b63&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;
    this.httpClient.get(api_url).subscribe(data=> {
      this.weatherJson = data;
      console.log(this.weatherJson)

      //Define values from JSON to respective datatype to pass to angular page
      this.Place = this.weatherJson.name;
      this.Temp = (parseFloat(this.weatherJson.main.temp)-273.15).toFixed(1);
      this.Pressure = this.weatherJson.main.pressure;
      this.Humidity = this.weatherJson.main.humidity;
      this.Maxtemp = (parseFloat(this.weatherJson.main.temp_min)-273.15).toFixed(1);
      this.Mintemp = (parseFloat(this.weatherJson.main.temp_max)-273.15).toFixed(1);
      this.Desc = this.weatherJson.weather[0].main;
      this.Speed = this.weatherJson.wind.speed;
      
      // switch(this.Desc)
      // {
      //   case 

      // }
    })
  }

  getLondonLocation(){

    //London
    let api_url1 = `https://api.openweathermap.org/data/2.5/weather?appid=40d8aa34748abbf7f5f10df4edb61b63&lat=51.5085&lon=-0.1278`;
    this.httpClient.get(api_url1).subscribe(data=> {
      this.LondonJson = data;

      //Define values from JSON to respective datatype to pass to angular page
      this.lonCity = this.LondonJson.name;
      this.lonTemp = (parseFloat(this.LondonJson.main.temp)-273.15).toFixed(1);
      this.lonPressure = this.LondonJson.main.pressure;
      this.lonHumidity = this.LondonJson.main.humidity;
      this.lonMintemp = (parseFloat(this.LondonJson.main.temp_min)-273.15).toFixed(1);
      this.lonMaxtemp = (parseFloat(this.LondonJson.main.temp_max)-273.15).toFixed(1);
      this.lonDesc = this.LondonJson.weather[0].main;
      this.lonSpeed = this.LondonJson.wind.speed;

      console.log(this.lonCity);
    })
  }

  getNyLocation() {
    let api_url2 = `https://api.openweathermap.org/data/2.5/weather?appid=40d8aa34748abbf7f5f10df4edb61b63&lat=40.7306&lon=-73.9867`;
    this.httpClient.get(api_url2).subscribe(data=> {
      this.NYJson = data;

      //Define values from JSON to respective datatype to pass to angular page
      this.nyCity = this.NYJson.name;
      this.nyTemp = (parseFloat(this.NYJson.main.temp)-273.15).toFixed(1);
      this.nyPressure = this.NYJson.main.pressure;
      this.nyHumidity = this.NYJson.main.humidity;
      this.nyMintemp = (parseFloat(this.NYJson.main.temp_min)-273.15).toFixed(1);
      this.nyMaxtemp = (parseFloat(this.NYJson.main.temp_max)-273.15).toFixed(1);
      this.nyDesc = this.NYJson.weather[0].main;
      this.nySpeed = this.NYJson.wind.speed;

      console.log(this.nyCity);
    })
  }

  getSingaporeLocation() {
    let api_url3 = `https://api.openweathermap.org/data/2.5/weather?appid=40d8aa34748abbf7f5f10df4edb61b63&lat=1.2905&lon=103.852`;
    this.httpClient.get(api_url3).subscribe(data=> {
      this.SingaporeJson = data;

      //Define values from JSON to respective datatype to pass to angular page
      this.sgCity = this.SingaporeJson.name;
      this.sgTemp = (parseFloat(this.SingaporeJson.main.temp)-273.15).toFixed(1);
      this.sgPressure = this.SingaporeJson.main.pressure;
      this.sgHumidity = this.SingaporeJson.main.humidity;
      this.sgMintemp = (parseFloat(this.SingaporeJson.main.temp_min)-273.15).toFixed(1);
      this.sgMaxtemp= (parseFloat(this.SingaporeJson.main.temp_max)-273.15).toFixed(1);
      this.sgDesc= this.SingaporeJson.weather[0].main;
      this.sgSpeed= this.SingaporeJson.wind.speed;

    })
  }
  }


  

