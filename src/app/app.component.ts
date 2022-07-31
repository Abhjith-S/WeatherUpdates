import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/weather.model';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export default class AppComponent implements OnInit {

  constructor(private service: ServicesService){
  }
  weatherdata? : weatherData
  location? : string 
  Item? : any
  destination? : string
  tempList : string [] = [];
  stateListIndia = ['Mumbai', 'Delhi','bengaluru','Hyderabad','Ahmedabad','Chennai','Kolkata','Kochi','Trivandrum', 'Pune', 'Surat', 'Lucknow','Ghaziabad', 'Vijayawada','Faridabad', 'Meerut','Navi Mumbai', 'Howrah', 'Coimbatore', 'Jodhpur', 'Madurai', 'Mysore', 'Gurgaon', 'Mangalore', 'Kozhikode','Agartala', 'Thrissur', 'Pondicherry','Palakkad', 'Thrissur' ]
  stateListUSA = ['New York City', 'Los Angeles','Chicago','Houston','Phoenix','Philadelphia','San Antonio','San Diego','Dallas','San Jose','Austin','Jacksonville','Fort Worth','Columbus','	Charlotte','Indianapolis','San Francisco', 'Seattle','Denver','Washington','Nashville','Oklahoma City','Boston','El Paso','Portland','Las Vegas','Memphis','Detroit','Baltimore','Milwaukee']
  stateListUK = ['London','Birmingham','Leeds','Glasgow','Sheffield','Bradford','Liverpool','Edinburgh','Manchester','Bristol', 'Kirklees','Fife','Wirral','North Lanarkshire','Wakefield','Cardiff','Dudley','Wigan','South Lanarkshire','Coventry','Belfast','Leicester','Sunderland','Sandwell','Doncaster','Stockport','Sefton','Nottingham','wells','Wolverhampton']
  statelistGermany = ['Berlin','Hamburg','Munich','Cologne','Frankfurt am Main','Stuttgart','Dortmund',' Essen','Leipzig','Bremen','Dresden','Hanover','Nuremberg','Duisburg','Bochum','Wuppertal','Bielefeld','Bonn','Karlsruhe','Mannheim','Augsburg','Wiesbaden','Gelsenkirchen','Braunschweig','Chemnitz','Kiel','Aachen']
  statelistFrance = ['Paris','Marseille','Lyon','Toulouse','Nice','Nantes','Strasbourg','Montpellier','Bordeaux','Lille','Rennes','Reims','Toulon','Grenoble','Dijon','Nîmes','Angers','Villeurbanne','Limoges','Tours','Amiens','Perpignan','Metz','Besançon','Mulhouse','Caen','Argenteuil','Roubaix','Avignon','Dunkirk','Courbevoie','Poitiers','Pau']

  
  ngOnInit(): void {  
  }


  onsubmit(value : string){
    
    if(value == "India"){
      this.tempList = []
      this.destination = 'India' 
    this.stateListIndia.forEach(element => {
      this.getweather(element)
    });}
    if(value == "America"){
      this.tempList = []
      this.destination = 'America'
    this.stateListUSA.forEach(element => {
      this.getweather(element)
    });}
    if(value == "UK"){
      this.tempList = []
      this.destination = 'UK'
    this.stateListUK.forEach(element => {
      this.getweather(element)
    });}
    if(value == "France"){
      this.tempList = []
      this.destination = 'France'
    this.statelistFrance.forEach(element => {
      this.getweather(element)
    });}
    if(value == "Germany"){
      this.tempList = []
      this.destination = 'Germany'
    this.statelistGermany.forEach(element => {
      this.getweather(element)
    });}
    console.log(this.tempList)
  }
  private getweather(location: string){
    this.service.getContent(location)
    .subscribe({
      next: (response) => {
        this.weatherdata = response
          // console.log(response)
          var iconURL =  "http://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png"
                        // console.log(iconURL)
                        // console.log($scope.weatherData) 
          this.Item = [response.name,response.main.temp, iconURL, response.weather[0].main]
                        // console.log(Items)
                    // /console.log($scope.weatherData.data[0].city_name, $scope.weatherData.data[0].app_temp)
          this.tempList.push(this.Item)
      }
    })
  }
}


