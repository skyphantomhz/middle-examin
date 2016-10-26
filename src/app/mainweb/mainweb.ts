import { Component, OnInit, Injectable, EventEmitter }  from '@angular/core';

import {Students} from '../bean/students';
import {Validate} from '../common/validate'

@Component({
  selector: 'mainweb',
  templateUrl: './mainweb.html',
  styleUrls: ['./mainweb.css'],
})
export class MainWeb {
  public static id: number;
  av: number;
  st: string;
  check: number;
  public static str: string;
  students: Students[];
  constructor() {
    this.check = 2;
    MainWeb.id = 0;
    this.students = [
      new Students(
        '01',
        'Le Thi',
        'Thui',
        '1996-09-25',
        8.0,
        'Passed'),
      new Students(
        '02',
        'Nguyen Thi',
        'Thu Y',
        '1996-09-06',
        4.0,
        'Failed')
    ]
  }

  // student = new Students('12','Nguyen Van','A', '12/12/2016',7.0,'passed');
  // errorMessage: string;
  // studentsService: StudentsService
  // constructor() {

  //  }

  // addProduct() {     
  //   console.log(`3`);       
  //     if (!this.student) { return; }
  //     console.log(`4`);  
  //     this.studentsService.addStudent(this.student)
  //         .subscribe(
  //         student => this.student),
  //         error => this.errorMessage = <any>error;
  //     console.log(`5`); 

  // }
  public static resoleID(): string {
    MainWeb.id = MainWeb.id + 1;
    if (MainWeb.id == 1) {
      MainWeb.str = '03';
      MainWeb.id = 3;
    }
    else if (MainWeb.id < 10 && MainWeb.id > 2) {
      MainWeb.str = '0' + MainWeb.id;
    }
    else {
      MainWeb.str = '' + MainWeb.id;
    }
    return MainWeb.str
  }
  addStudent(firstname: HTMLInputElement, lastname: HTMLInputElement, dob: HTMLInputElement, mathematic: HTMLInputElement, physic: HTMLInputElement): boolean {
    this.check = 2;
    if (firstname.value == '' || lastname.value == '' || dob.value == '' || mathematic.value == '' || physic.value == '') {
      this.check = 0;
    }
    else {
      if (Validate.checkMark(parseFloat(mathematic.value)) && Validate.checkMark(parseFloat(physic.value))) {
        this.av = (parseFloat(mathematic.value) + parseFloat(physic.value)) / 2;
        if (this.av < 5) {
          this.st = 'Failed';
        }
        else {
          this.st = 'Passed'
        }
        this.students.push(new Students(MainWeb.resoleID(), firstname.value, lastname.value, dob.value, this.av, this.st));
        this.check=1;
        firstname.value = '';
        lastname.value = '';
        dob.value = '';
      }
      else {
        alert(`Ban nhhap sai diem(Diem co gia tri tu 0  den 10)`)
      }
    }


    // title.value = '';
    // link.value = '';
    this.av = 0;
    this.st = '';
    mathematic.value = '';
    physic.value = '';

    return false;
  }

  // addStudent(firstname: HTMLInputElement, lastname: HTMLInputElement, dob: HTMLInputElement, mathematic: HTMLInputElement, physic: HTMLInputElement): boolean {
  //   if (Validate.checkMark(parseFloat(mathematic.value)) && Validate.checkMark(parseFloat(physic.value))) {
  //     this.av = (parseFloat(mathematic.value) + parseFloat(physic.value)) / 2;
  //     if (this.av < 5) {
  //       this.st = 'Failed';
  //     }
  //     else {
  //       this.st = 'Passed'
  //     }
  //     this.students.push(new Students(MainWeb.resoleID(), firstname.value, lastname.value, dob.value, this.av, this.st));
  //     firstname.value = '';
  //     lastname.value = '';
  //     dob.value = '';
  //   }
  //   else {
  //     alert(`Ban nhhap sai diem(Diem co gia tri tu 0  den 10)`)
  //   }



  //   // title.value = '';
  //   // link.value = '';
  //   this.av = 0;
  //   this.st = '';
  //   mathematic.value = '';
  //   physic.value = '';

  //   return false;
  // }
}