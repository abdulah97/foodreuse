import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { MilkComponent } from './milk/milk.component';
import { AppleComponent } from './apple/apple.component';
import { BananaComponent } from './banana/banana.component';
import { TomatoComponent } from './tomato/tomato.component';


const routes: Routes = [  
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'donate', component: DonateComponent },
{ path: 'milk', component: MilkComponent},
{ path: 'apple', component: AppleComponent},
{ path: 'banana', component: BananaComponent},
{ path: 'tomato', component: TomatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
