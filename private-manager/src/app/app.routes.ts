import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Home } from './home/home';
import { Garden } from './garden/garden';
import { GardenHaveThere } from './garden/have-there/have-there';
import { GardenNotices } from './garden/notices/notices';
import { GardenShopping } from './garden/shopping/shopping';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'home', component: Home },
  { path: 'garden', component: Garden },
  { path: 'garden-have', component: GardenHaveThere },
  { path: 'garden-notices', component: GardenNotices },
  { path: 'garden-shopping', component: GardenShopping },
  { path: 'garden', component: Garden },
  { path: 'garden', component: Garden },
  { path: 'garden', component: Garden },
];
