import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private renderer:Renderer2){

  }

  ngAfterViewInit(): void {
    this.renderer.setAttribute(document.querySelector('body'), "id", "page-top");
  }
}
