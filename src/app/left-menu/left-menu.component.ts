import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [RouterModule],
  providers:[ NgbModalConfig, NgbModal],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent {

  constructor( 	config: NgbModalConfig,
		private modalService: NgbModal) {
    
     }

     showAppMenu = false
   showAppMenuContent(){
    this.showAppMenu =!this.showAppMenu;
   }

   closeMenu() {
    if (this.showAppMenu) {
      this.showAppMenu = false;
    }
  }
     open(content: any) {
      this.modalService.open(content);
    }
}
