import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { GoogleAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor( private fireauth : AngularFireAuth, private router : Router) { }

  // login method
  login (email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password)
    .then( ()=> {
      
      localStorage.setItem('token', 'true');
      this.router.navigate(['dashboard']);
    }, err=>{
      alert('something went wrong');
      this.router.navigate(['/login']);
    })
  }


  // register method 
  register(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email,password)
    .then( ()=>{
      alert('Registration Successful');
      this.router.navigate(['/login'])
    }, err => {
      alert(err.massage);
      this.router.navigate(['/register'])
    })
  }

  // sign out
  logout(){
    this.fireauth.signOut()
    .then( ()=> {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }, err => {
      alert(err.massage);
    })
  }

  // sign in with google 
  googleSignIn(){
    return this.fireauth.signInWithPopup( new GoogleAuthProvider)
    .then( res=> {
      console.log(res.user?.displayName);
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
    }, err => {
      alert(err.massage)
    })
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
}
