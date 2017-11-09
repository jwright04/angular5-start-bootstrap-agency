import {Component, OnInit, Input} from '@angular/core';
import {PortfolioModalModel} from "../portfolio/portfolio.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  @Input() portfolioData:PortfolioModalModel;
  
  constructor() { }

  ngOnInit():void  {

  }

}
