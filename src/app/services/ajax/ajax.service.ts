import { Injectable, isDevMode } from '@angular/core';
import { Http, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { DataType } from './enum/data-type.enum';
import { AjaxResponse } from './interface/ajax-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private _baseUrl: string = 'http://192.168.0.7:61518/WCFService/AffiliateService.svc/';

  constructor(private _http: Http) { }

  private Send(apiName: string, requestMethod: RequestMethod, data?: any, dataType: DataType = DataType.RowData, baseUrl?: string): Promise<AjaxResponse> {
    return new Promise((resolve, reject) => {


      let _requestOptions = new RequestOptions();

      let _headers = new Headers();

      let _t_baseurl = baseUrl ? baseUrl + apiName : this._baseUrl + apiName;
      let _dataToSend: any = data;
      if (_dataToSend != null && _dataToSend != undefined) {
        if (dataType == DataType.RowData) {
          _headers.append("Content-Type", "application/json");
          // _headers.append('Content-Type', 'application/x-www-form-urlencoded');
          // _headers.append('Content-Type', 'multipart/form-data');
          // _headers.append("Cache-Control", "no-cache");

          _dataToSend = JSON.stringify(data);
          // _requestOptions.headers = _headers;
          _requestOptions.body = _dataToSend;
          _requestOptions.withCredentials = false;
        }
        else if (dataType == DataType.FormData) {

        }
      }

      _requestOptions.method = requestMethod;
      let _ajaxResponse: AjaxResponse = {
        data: null,
        msg: '',
        responseCode: 1,
        httpInfo: {
          ok: true,
          status: 200,
          statusText: 'OK',
          url: ''
        }
      };

      this._http.request(_t_baseurl, _requestOptions).subscribe(response => {

        let statusCode: number = response.status;
        console.log('Status code : ', statusCode);
        let responseData: any = response.json();

        // feed api data
        _ajaxResponse.data = responseData.Data;
        _ajaxResponse.msg = responseData.Msg;
        _ajaxResponse.responseCode = parseInt(responseData.ResponseCode);


        //feed http request data
        _ajaxResponse.httpInfo.ok = response.ok;
        _ajaxResponse.httpInfo.status = response.status;
        _ajaxResponse.httpInfo.statusText = response.statusText;
        _ajaxResponse.httpInfo.url = response.url;

        resolve(_ajaxResponse);
      }, (err: Response) => {
        _ajaxResponse.responseCode = 0;
        _ajaxResponse.httpInfo.ok = err.ok;
        _ajaxResponse.httpInfo.status = err.status;
        _ajaxResponse.httpInfo.statusText = err.statusText;
        _ajaxResponse.httpInfo.url = err.url;
        
        if(isDevMode){
          
        }
        else{

        }
        
        resolve(_ajaxResponse)
      });
    });
  }

  /**
   * Send a http request using POST method
   * @param apiName name of the web api service
   * @param data data to send (optional)
   * @param dataType type of the data (optional. default to RowData)
   * @param baseUrl base url of the web api (optional)
   */
  public Post(apiName: string, data?: any, dataType: DataType = DataType.RowData, baseUrl?: string): Promise<AjaxResponse> {
    return this.Send(apiName, RequestMethod.Post, data, dataType, baseUrl);
  }

  /**
   * Send a http request using GET method
   * @param apiName name of the web api service
   * @param data data to send (optional)
   * @param dataType type of the data (optional. default to RowData)
   * @param baseUrl base url of the web api (optional)
   */
  public Get(apiName: string, data?: any, dataType: DataType = DataType.RowData, baseUrl?: string): Promise<AjaxResponse> {
    return this.Send(apiName, RequestMethod.Get, data, dataType, baseUrl);
  }

  /**
   * Send a http request using PUT method
   * @param apiName name of the web api service
   * @param data data to send (optional)
   * @param dataType type of the data (optional. default to RowData)
   * @param baseUrl base url of the web api (optional)
   */
  public Put(apiName: string, data?: any, dataType: DataType = DataType.RowData, baseUrl?: string): Promise<AjaxResponse> {
    return this.Send(apiName, RequestMethod.Put, data, dataType, baseUrl);
  }

  /**
   * Send a http request using DELETE method
   * @param apiName name of the web api service
   * @param data data to send (optional)
   * @param dataType type of the data (optional. default to RowData)
   * @param baseUrl base url of the web api (optional)
   */
  public Delete(apiName: string, data?: any, dataType: DataType = DataType.RowData, baseUrl?: string): Promise<AjaxResponse> {
    return this.Send(apiName, RequestMethod.Delete, data, dataType, baseUrl);
  }

}
