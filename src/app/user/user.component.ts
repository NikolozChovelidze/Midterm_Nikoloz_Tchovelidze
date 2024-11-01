import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentUser } from '../parent-user';
import { ChildUser } from '../child-user';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  //Task 3
  // @Input() users: ParentUser[] = [];
  //Task 4
  // @Output() childUsersEmitter = new EventEmitter<ChildUser[]>();

  // childUsers: ChildUser[] = [
  //   { id: 1, firstName: 'Sam', lastName: 'Green', dateOfBirth: new Date('2000-04-04'), phoneNumber: '456-789-0123', email: 'sam@example.com' },
  //   { id: 2, firstName: 'Lisa', lastName: 'White', dateOfBirth: new Date('1998-05-05'), phoneNumber: '567-890-1234', email: 'lisa@example.com' },
  // ];

  // emitChildUsers() {
  //   this.childUsersEmitter.emit(this.childUsers);
  // }

  //Task 6

  // @Input() users: ParentUser[] = [];

  // constructor(private displayService: DisplayService) {} // Inject the service

  // displayUsers() {
  //   this.displayService.displayArray(this.users);
  // }
}
