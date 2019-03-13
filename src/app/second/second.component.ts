import { Component, OnInit } from "@angular/core";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Alert } from "selenium-webdriver";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"]
})
export class SecondComponent implements OnInit {
  title = "Weather";
  userPosition: any;
  weatherJson: any;

  cityName: any;

  Place: string;
  Temp: any;
  Pressure: any;
  Humidity: any;
  Mintemp: any;
  Maxtemp: any;
  Desc: string;
  Speed: any;
  wi: any;

  //For HttpClient (need to check exact functionality)
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  //Getting city name as input from html

  //On opening or initialization of webpage, asks for user location to display weather conditions
  ngOnInit() {
    this.cityName = String(this.route.snapshot.paramMap.get("cty"));
    this.getCityWeather(this.cityName);
    console.log(this.cityName);
  }

  //Obtain weather details in JSON format
  getCityWeather(city: String) {
    let api_url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=110ff02ed24ccd819801248373c3b208";

    // "https://api.openweathermap.org/data/2.5/forecast?id=" +
    // city +
    // "&units=metric&appid=110ff02ed24ccd819801248373c3b208";
    console.log(api_url);
    this.httpClient.get(api_url).subscribe(data => {
      this.weatherJson = data;
      console.log(this.weatherJson);

      //Define values from JSON to respective datatype to pass to angular page
      this.Place = this.weatherJson.name;
      this.Temp = (parseFloat(this.weatherJson.main.temp) - 273.15).toFixed(1);
      this.Pressure = this.weatherJson.main.pressure;
      this.Humidity = this.weatherJson.main.humidity;
      this.Maxtemp = (
        parseFloat(this.weatherJson.main.temp_max) - 273.15
      ).toFixed(1);
      this.Mintemp = (
        parseFloat(this.weatherJson.main.temp_min) - 273.15
      ).toFixed(1);
      this.Desc = this.weatherJson.weather[0].main;
      this.Speed = this.weatherJson.wind.speed;

      this.wi = this.weatherIcon(this.Desc);
    });
  }

  weatherIcon(desc: any) {
    var date = new Date();
    var hours = date.getHours();

    switch (desc.toLowerCase()) {
      case "clear sky":
        if (hours >= 6 && hours <= 18)
          return "../../assets/weather-icon/svg/sun.svg";
        else return "../../assets/weather-icon/svg/moon.svg";
        break;

      case "clear":
        if (hours >= 6 && hours <= 18)
          return "../../assets/weather-icon/svg/sun.svg";
        else return "../../assets/weather-icon/svg/moon.svg";
        break;

      case "few clouds":
        if (hours >= 6 && hours <= 18)
          return "../../assets/weather-icon/svg/cloudysun.svg";
        else return "../../assets/weather-icon/svg/cloudmoon.svg";
        break;

      case "scattered clouds":
        if (hours >= 6 && hours <= 18)
          return "../../assets/weather-icon/svg/cloudy.svg";
        else return "../../assets/weather-icon/svg/cloudy.svg";
        break;

      case "broken clouds":
        if (hours >= 6 && hours <= 18)
          return "../../assets/weather-icon/svg/cloudy.svg";
        else return "../../assets/weather-icon/svg/cloudy.svg";
        break;

      case "shower rain":
        return "../../assets/weather-icon/svg/rain.svg";
        break;

      case "rain":
        return "../../assets/weather-icon/svg/heavyrain.svg";
        break;

      case "thunderstorm":
        return "../../assets/weather-icon/svg/storm.svg";
        break;

      case "snow":
        return "../../assets/weather-icon/svg/heavysnow.svg";
        break;

      case "mist":
        return "../../assets/weather-icon/svg/snow.svg";
        break;

      default:
        return "../../assets/weather-icon/svg/cloudy.svg";
    }
  }
}
