import { Injectable } from '@angular/core';
import { HttpClientService } from '../../http-client.service';
import { CreateProduct } from 'contracts/create_product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService : HttpClientService) { } 


}

