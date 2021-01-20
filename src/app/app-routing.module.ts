import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { DailyComponent } from './daily/daily.component';

const routes: Routes = [
	{
		path: '', 
		component: HomeComponent
	},
	{
		path: 'daily',
		component: DailyComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
