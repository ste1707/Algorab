import { Component, OnInit } from '@angular/core';
import { WebRequestService } from '../../service/web-request.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private webService: WebRequestService) { }

  ngOnInit(): void {
  }

  inviaRichiesta() {
    this.webService.post('richiesta', [{ id: '1', value: 10 }, { id: '2', value: 30 }]).subscribe( (data) =>{
      console.log(data)
    })
  }

}
