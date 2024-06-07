import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-upload', component: UploadComponent, canActivate: [AuthGuard]},
  { path: 'app-video-player', component: VideoPlayerComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
