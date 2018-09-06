import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bikeReg;

  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.route is the current route but we do not have it yet and we will set it in the constuctor
    //.snap is the latest info and  is the .id is the :route specification we sepcified in app.routing.module.ts file
    this.getBikeReg(this.route.snapshot.params.id);
  }
  getBikeReg(id:number){
    this.bikeService.getBike(id).subscribe(
      data =>{
        this.bikeReg = data;
      },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }
}
    
    

