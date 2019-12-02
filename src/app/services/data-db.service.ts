import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MessageI } from '../Models/message.interfaces';

 
@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private contactCollection: AngularFirestoreCollection<MessageI>;


  constructor( private afs: AngularFirestore) {
    this.contactCollection = afs.collection<MessageI>('contacts');

   }

   saveMessage( newContact: any ): void {

    this.contactCollection.add( newContact );

   }
}
