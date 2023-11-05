import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  ngAfterViewInit() {
    $(document).ready(() => {
      console.log('Document ready event executed.');
      $('#submit-button').click(function (e) {
        console.log('Submit button clicked.');
        var name = $('#name').val() as string;
        var email = $('#email').val() as string;
        var phone = $('#phone').val() as string;
        var message = $('#message').val() as string;
        console.log('Name: ' + name);
        console.log('Email: ' + email);
        console.log('Phone: ' + phone);
        console.log('Message: ' + message);
        $('#submit-button').html('Appointment Booked');
        $('#submit-button').css('background-color', 'yellow');
        $('#submit-button').css('color', 'black');
        $('#name').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#message').val('');
      });
    });
  }
}
