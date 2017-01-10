import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'
import { Contact } from './contact.component';

@Injectable()
export class SharedContactsService {
    @Output() fire: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        console.log('shared service started');
    }

    change(username: string) {
        console.log('change started');
        this.fire.emit(username);
    }

    getEmittedValue() {
        return this.fire;
    }

}
