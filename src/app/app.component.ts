import {Component, Renderer2} from '@angular/core';

const agencyScript:string = "/assets/js/agency.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private loadAgency: Promise<any>;

  constructor(private renderer:Renderer2){

  }

  ngAfterViewInit(): void {
    this.renderer.setAttribute(document.querySelector('body'), "id", "page-top");

    //load the agency.js after everything else has loaded
    this.loadAgency = new Promise((resolve) => {
      console.log('resolving promise...');
      this.loadScript();
    });
  }

  private loadScript():void {
    console.log('load agency script ...');
    let node = document.createElement('script');
    node.src = agencyScript;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

  }
}
