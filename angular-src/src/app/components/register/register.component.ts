import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService,
    private authService:AuthService,
    private router: Router
) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      console.log('please fill all fields');
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      console.log('please fill correct email');
      return false;
    }

      // Register user
      this.authService.registerUser(user).subscribe(data => {
        if(data.success){
          console.log('you are now registered');
          this.router.navigate(['/login']);
        } else {
          console.log('not registered yet..try again');
          this.router.navigate(['/register']);
        }
      });
  
  }

}
