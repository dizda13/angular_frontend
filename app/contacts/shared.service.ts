import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'
import { Contact } from './contact.component';

@Injectable()
export class SharedService {
  @Output() fire: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();

   constructor() {
     console.log('shared service started');
   }

   change(contacts: Contact[]) {
     console.log('change started');
     this.fire.emit(contacts);
   }

   getEmittedValue() {
     return this.fire;
   }

}
