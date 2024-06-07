import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  private uploadedVideoUrl: string = '';

  constructor(private http: HttpClient) { }

  getListOfVideos(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/list-of-videos');
  }

  setVideoUrl(url: string): void {
    this.uploadedVideoUrl = url;
  }

  getVideoUrl(): string {
    return this.uploadedVideoUrl;
  }
}
