
export class Weather {
     
    constructor(city , countryCode){
        this.key ='c7de8d7f99362fef5e769baf83ed16cc';
        this.city = city;
        this.countryCode = countryCode;
    }

   async getWeather(){
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.key}&units=metric`;
        const res  =   await fetch(URI)
        const data =   await res.json();
        return data;
    }

    changeLocation(city, countryCode){
         this.city = city;
         this.countryCode = countryCode;
    }
}