

export class LocalStorage {

      constructor(){
          this.city ;
          this.countryCode;
          this.defaultCity = 'london';
          this.defaultCountry = 'uk'
      }

  
      setLocalstorage(city , countryCode){
          localStorage.setItem('city', city);
          localStorage.setItem('countryCode', countryCode);
      }


      getLocalstorage(){

        if(localStorage.getItem('city') === null ){
            this.city = this.defaultCity;
          
        }else {
            localStorage.getItem('city');
           
        }

        if(localStorage.getItem('countryCode') === null){
            this.countryCode = this.defaultCountry
        }else{
            localStorage.getItem('countryCode');
        }

        return  {
            city: this.city,
            country: this.countryCode
        }
          
      }
}