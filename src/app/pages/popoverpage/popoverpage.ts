import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, NavController } from '@ionic/angular';
import { CometChat } from '@cometchat-pro/cordova-ionic-chat';

@Component({
    template: `
      <ion-list>
      
        <ion-item (click)="logout()">
          <ion-label>
            Logout
          </ion-label>
        </ion-item>

        <ion-item (click)="blockedUsers()">
          <ion-label>
            Blocked Users
          </ion-label>
        </ion-item>
        
      </ion-list>
    `
})
export class PopoverPage {
    constructor(
        private router: Router,
        private popOverCtrl: PopoverController,
        private navController: NavController
    ) { }

    async logout() {
      await this.popOverCtrl.dismiss();
      CometChat.logout().then(
        () => {
          this.router.navigate(['login']);
        }, error => {
          console.log('Logout failed with exception:', { error });
        }
      );
    }

    async blockedUsers() {
      await this.popOverCtrl.dismiss();
      this.navController.navigateBack('tabs/blocked-users');
    }
}
