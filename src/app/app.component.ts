import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';

  constructor(private toastrService: CustomToastrService){
    toastrService.message("Merhaba", "Atakan", ToastrMessageType.Info);
    toastrService.message("Merhaba", "Atakan", ToastrMessageType.Error);
    toastrService.message("Merhaba", "Atakan", ToastrMessageType.Warning);
    toastrService.message("Merhaba", "Atakan", ToastrMessageType.Succes);

  }
}


