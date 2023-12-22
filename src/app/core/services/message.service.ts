import { Injectable } from '@angular/core';
import { mergeMap, Observable, of } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { ApiResponseModel, MessageModel, RequestConfigModel } from '../models';
import { ExternalApiService } from './external-api.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(public externalApiService: ExternalApiService) {}
  getAllMessages(): Observable<ApiResponseModel> {
    const config: RequestConfigModel = {
      url: `${env.api.serverUrl}/api/messages`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    return this.externalApiService.callExternalApi(config);
  }
  getMessageById(id: number): Observable<ApiResponseModel> {
    const config: RequestConfigModel = {
      url: `${env.api.serverUrl}/api/messages/${id}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    return this.externalApiService.callExternalApi(config);
  }
  createMessage(message: MessageModel): Observable<ApiResponseModel> {
    const config: RequestConfigModel = {
      url: `${env.api.serverUrl}/api/messages`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: message
    };

    return this.externalApiService.callExternalApi(config);
  }

  

  getPublicResource = (): Observable<ApiResponseModel> => {
    const config: RequestConfigModel = {
      url: `${env.api.serverUrl}/api/messages/public`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    return this.externalApiService.callExternalApi(config).pipe(
      mergeMap((response) => {
        const { data, error } = response;

        return of({
          data: data ? (data as MessageModel) : null,
          error,
        });
      })
    );
  };

  getProtectedResource = (): Observable<ApiResponseModel> => {
    const config: RequestConfigModel = {
      url: `${env.api.serverUrl}/api/messages/protected`,
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    };

    return this.externalApiService.callExternalApi(config).pipe(
      mergeMap((response) => {
        const { data, error } = response;

        return of({
          data: data ? (data as MessageModel) : null,
          error,
        });
      })
    );
  };

  getAdminResource = (): Observable<ApiResponseModel> => {
    const config: RequestConfigModel = {
      url: `${env.api.serverUrl}/api/messages/admin`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    return this.externalApiService.callExternalApi(config).pipe(
      mergeMap((response) => {
        const { data, error } = response;

        return of({
          data: data ? (data as MessageModel) : null,
          error,
        });
      })
    );
  };
  
}
