import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form:any;
  isSubmitted:boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // $('a').removeClass('activeMenu');
    // $("#contactus").addClass('activeMenu');

    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      subject: ['',Validators.required],
      message: ['',Validators.required]
    });

  }

  get f() { return this.form.controls; }


  // click(){
  //   Swal.fire({
  //     // position: 'top-end',
  //     icon: 'success',
  //     title: 'Thank you for contacting us!',
  //     showConfirmButton: false,
  //     width:'400px',
  //     timer: 1500
  //   });
  // }

  async onSubmit() {
    
    this.isSubmitted = true;
    
    if (this.form.invalid) {
      return;
    }
    await Email.send({
      Host : 'smtp.gmail.com',
      Username : 'cdab11101@gmail.com',
      Password : 'Abcd@1233',
      To : 'shahneel1562@gmail.com',
      From : `cdab11101@gmail.com`,
      Subject : this.f.subject.value,
      Body : `
      <i>This is sent from contact page.</i> <br/> <b>Name: </b>${this.f.userName.value} <br /> <b>Email: </b>${this.f.email.value}<br /> <b>Subject: </b>${this.f.subject.value}<br /> <b>Message:</b>${this.f.message.value} <br /> Message<br><br> <b>~End of Message.~</b> `
      }).then( message => {  
        Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Thank you for contacting us!',
        showConfirmButton: false,
        width:'400px',
        timer: 1500
      });
      this.isSubmitted = false;
      this.form.reset(); } );
    
  }

}
