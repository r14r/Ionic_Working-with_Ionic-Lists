import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{ path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
	{ path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
	{ path: 'list-details/:id', loadChildren: './pages/list-details/list-details.module#ListDetailsPageModule' },
	{ path: 'samples-list', loadChildren: './pages/samples/samples-list/samples-list.module#SamplesListPageModule' },
	{ path: 'samples-forms', loadChildren: './pages/samples/samples-forms/samples-forms.module#SamplesFormsPageModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
