import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  endPoint='drama'
  singleData:any
  constructor(private apicallService:ApicallService,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeroute.paramMap.forEach(ele=>{
      console.log(ele.get('id'));
      let url=this.endPoint+'/'+ele.get('id')
      this.apicallService.getData(url).subscribe(item=>{
        // console.log(item);
        this.singleData=item

        
      })
      
    })


  }

}
