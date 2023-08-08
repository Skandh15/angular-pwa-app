import { Component, OnInit } from '@angular/core';
import { VoiceService } from './voice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private voiceService: VoiceService) {}
  ngOnInit(): void {
    this.voiceService.startRecognition();
  }

  ngOnDestroy(): void {
    this.voiceService.stopRecognition();
  }
  title = 'angular-pwa-app';
}
