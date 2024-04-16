import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
endPoint='drama'
horrorData:any
searchValue:any
  constructor(private apicallService:ApicallService) { }

  ngOnInit(): void {
    this.apicallService.getData(this.endPoint).subscribe(res=>{
  this.horrorData=res
  console.log(this.horrorData);
  
    })

    
  }
  

}
