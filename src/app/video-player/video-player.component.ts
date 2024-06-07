import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VideoPlayerService } from './video-player.service'

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent {
  uploadedVideoUrl: string | undefined;
  dictionaryOfVideos: any = {};

  constructor(private videoPlayerService: VideoPlayerService, private router: Router) { }

  ngOnInit(): void {
    this.videoPlayerService.getListOfVideos().subscribe(response => {
      this.dictionaryOfVideos = response;
      });

    this.uploadedVideoUrl = this.videoPlayerService.getVideoUrl();
    if (!this.uploadedVideoUrl) {
      this.router.navigate(['/app-upload']);
      }
  }

  clickVideoUrl(videoUrl: any): void {
    this.videoPlayerService.setVideoUrl(videoUrl);
    this.uploadedVideoUrl = this.videoPlayerService.getVideoUrl();
    this.router.navigate(['/app-video-player']);
  }

  uploadVideo() {
    this.router.navigate(['/app-upload']);
  }
}
