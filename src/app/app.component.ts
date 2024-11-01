import { Component } from '@angular/core';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Midterm_Nikoloz_Tchovelidze';
  //Task 2
  // users: User[] = [
  //   { firstName: 'Alice', lastName: 'Smith', age: 22 },
  //   { firstName: 'Bob', lastName: 'Johnson', age: 19 },
  //   { firstName: 'Charlie', lastName: 'Brown', age: 25 },
  //   { firstName: 'David', lastName: 'Wilson', age: 18 },
  //   { firstName: 'Eve', lastName: 'Davis', age: 30 },
  // ];

  //Task 3
  users: ParentUser[] = [
    { id: 1, firstName: 'Alice', lastName: 'Smith', dateOfBirth: new Date('1998-01-01'), phoneNumber: '123-456-7890', email: 'alice@example.com' },
    { id: 2, firstName: 'Bob', lastName: 'Johnson', dateOfBirth: new Date('2002-02-02'), phoneNumber: '234-567-8901', email: 'bob@example.com' },
    { id: 3, firstName: 'Charlie', lastName: 'Brown', dateOfBirth: new Date('1995-03-03'), phoneNumber: '345-678-9012', email: 'charlie@example.com' },
  ];

  //Task 4
  // ChildUser: ChildUser[] = [];

  // childUsersEmitter(data:any)
  // {
  //   this.ChildUser = data;
  // }

  //Task 5

  // users: User[] = [];
  // userForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.userForm = this.fb.group({
  //     id: [null],
  //     firstName: ['', [Validators.required, Validators.minLength(3)]],
  //     lastName: ['', [Validators.required, Validators.minLength(3)]],
  //     dateOfBirth: ['', Validators.required],
  //     phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
  //     email: ['', [Validators.required, Validators.email, Validators.minLength(8)]],
  //   });
  // }

  // addUser() {
  //   if (this.userForm.valid) {
  //     const newUser: User = { ...this.userForm.value };
  //     this.users.push(newUser);
  //     this.userForm.reset(); // Reset form after submission
  //   }
  // }

  //Task 6


}
