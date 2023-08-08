import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {
  recognition: any;

  constructor() {
    // Create a SpeechRecognition instance using the webkitSpeechRecognition constructor
    this.recognition = new ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)();
    this.recognition.lang = 'en-US';
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
  }

  startRecognition(): void {
    this.recognition.start();

    this.recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript.toLowerCase();

      // Check for voice commands and navigate accordingly
      if (command.includes('home')) {
        window.location.href = '/home'; // Navigate to home page
      } else if (command.includes('about')) {
        window.location.href = '/about'; // Navigate to about page
      } else if (command.includes('services')) {
        window.location.href = '/services'; // Navigate to services page
      } // Add more commands and navigation as needed
    };
  }

  stopRecognition(): void {
    this.recognition.stop();
  }
}
