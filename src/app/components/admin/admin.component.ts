import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
//create a public bike variable to hold all the bikes info that is returned
public bikes;
  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    //call the getbikemehtod by initializing it.
    this.getBikes();
  }
//make a call over to BikeService to retreive the bikes and store in pblic bike variable we created
getBikes(){
  //this.bikeService calls the bike service
  //.getBikes() method which returns an observable and we subscrible to that observable
  // it will either get data or error back that we will log to the console
  // getBikes () method does not get called untill we tell teh component to call it in teh ng init method
  // after calling the method in nginit we need to update the html to display listof bikes with ngFor
  this.bikeService.getBikes().subscribe(
    data=>{this.bikes = data},
    err => console.error(err),
    () => console.log('bikes loaded')
  );
}

}
