import { Component } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'client-list',
  styleUrls: ['./client-list.component.scss'],
  templateUrl: './client-list.component.html',
})
export class ClientListComponent {


  clients: FirebaseListObservable < any > ;
  constructor(db: AngularFireDatabase) {
    this.clients = db.list('/clients');
  }
  addItem(newName: string, newWebsite: string, newStatus: string) {
    this.clients.push({ name: newName, website: newWebsite, status: newStatus });
  }
  updateItem(key: string, newText: string) {
    this.clients.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.clients.remove(key);
  }
  deleteEverything() {
    this.clients.remove();
  }

}
