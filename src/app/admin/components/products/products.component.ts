import { Component } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products:not(p)',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

constructor(private httpClientService: HttpClientService){}


  ngOnInit(): void{
    
  }

}

