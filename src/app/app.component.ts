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
  userPosition: any;
  weatherJson: any;
  Place: string;
  Temp: any;
  Pressure: any;
  Humidity: any;
  Mintemp: any;
  Maxtemp: any;
  Desc: string;
  Speed: any;
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

    })
  }


  
}
