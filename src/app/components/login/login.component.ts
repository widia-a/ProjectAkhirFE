import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ILogin} from "../../interfaces/i-login";
import {LoginService} from "../../services/login.service";
import {StorageService} from "../../services/storage.service";
import {throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ILoginWrapper} from "../../interfaces/i-user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./app.css']
})
export class LoginComponent implements OnInit {

  lastURL: string | null = null;
  defaultURL: string = "/dashboard";
  requiredForm!: FormGroup;
  messageError: string = "";

  user: ILogin = {
    nip: "",
    password: ""
  };

  constructor(
    private loginService: LoginService,
    private storageService: StorageService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.requiredForm = new FormGroup({
      nip: new FormControl(this.user.nip, [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(() => new Error('Something Bad Happen'))
  }

  onLogin() {
    this.user = this.requiredForm.value
    this.loginService.login(this.user)
      .subscribe(
        (response: ILoginWrapper) => {
          this.storageService.save('nip', response.data.nip);
          this.storageService.save('name', response.data.fullname);
          if (this.lastURL) {
            this.router.navigate([this.lastURL])
          } else {
            this.router.navigate([this.defaultURL])

          }

        }, error => {
          console.log(error.message);
          alert("LOGIN GAGAL, USERNAME ATAU PASSWORD SALAH")
          this.messageError = error.message;
        }
      )
  }

  ngOnInit(): void {
  }

}
