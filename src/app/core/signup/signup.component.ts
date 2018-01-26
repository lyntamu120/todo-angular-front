import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = 'email';
  password = 'password';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
      const user = {
          email: this.email,
          password: this.password
      };
      this.http.post('https://still-sea-39427.herokuapp.com/users', user).subscribe(data => {
          console.log(data);
      }, err => {
          console.log(err);
      });
  }

}
