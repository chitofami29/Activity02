import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName = "";
  contNumber = ""
  contacts: any = [];

  constructor(public alertController: AlertController, public router:Router) { }

  saveC() {
    let contact = {
      name: this.contName,
      number: this.contNumber
    }
    this.contacts.push(contact);
    this.clearField();
    console.log(this.contacts);
  }
  clearField() {
    this.contName = "";
    this.contNumber = "";
  }

  async trash(cont) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Deletion?',
      message: '<strong>Are you sure you want to permanetly remove this contact?</strong>',
      buttons: [
        {
          text: 'Disagree',
          role: 'disagree',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Disagree!');
          }
        }, {
          text: 'Agree',
          handler: () => {
          let index = this.contacts.indexOf(cont);
          if(index > -1){
          this.contacts.splice(index, 1);
            console.log('Agree!');
          }
          }
        }
      ]
    });

    await alert.present();
  }

  message(){
    console.log("Message Sent!");
    this.router.navigate(['message'])
  }

}