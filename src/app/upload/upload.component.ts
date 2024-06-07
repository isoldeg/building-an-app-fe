import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UploadService } from './upload.service'
import { VideoPlayerService } from '../video-player/video-player.service'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  selectedFile: File | undefined;
  uploadedVideoUrl: string = '';

  constructor(private http: HttpClient, private router: Router, private uploadService: UploadService, private videoPlayerService: VideoPlayerService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.uploadService.uploadVideo(formData).subscribe(
      response => {
        this.uploadedVideoUrl = response.videoUrl;
        this.videoPlayerService.setVideoUrl(this.uploadedVideoUrl);
        this.router.navigate(['/app-video-player']);
      },
      error => {
        console.error('Error uploading file:', error);
      }
    );
  }
}
