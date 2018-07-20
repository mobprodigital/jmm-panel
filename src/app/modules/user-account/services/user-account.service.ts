import { Injectable } from '@angular/core';
import { AjaxService } from '../../../services/ajax/ajax.service';
import { AjaxResponse } from "../../../services/ajax/interface/ajax-response.interface";
import { DataType } from '../../../services/ajax/enum/data-type.enum';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  constructor(private _ajaxService: AjaxService) { }

  public Register(newUser : any) : Promise<AjaxResponse> {
    return this._ajaxService.Post('signup', newUser);
  }

}
