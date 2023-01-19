import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MuseiComponent } from './musei/musei.component';
import { HomeComponent } from './home/home.component';
import { IntroGuideComponent } from './intro-guide/intro-guide.component';

const routes: Routes = [
  {path: '', redirectTo : 'homepage', pathMatch : 'full'},
  {path:'register' , component: RegisterComponent},
  {path:'login' , component: LoginComponent},
  {path:'homepage' , component: HomeComponent},
  {path:'musei' , component: MuseiComponent},
  {path:'intro_guide' , component: IntroGuideComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
