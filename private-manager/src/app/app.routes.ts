import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Garden } from './garden/garden';
import { GardenHaveThere } from './garden/have-there/have-there';
import { GardenNotices } from './garden/notices/notices';
import { GardenShopping } from './garden/shopping/shopping';
import { HaveThere } from './home/have-there/have-there';
import { Notices } from './home/notices/notices';
import { Shopping } from './home/shopping/shopping';

export const routes: Routes = [
  { path: '', component: GardenNotices },
  { path: 'home', component: Home },
  { path: 'garden', component: Garden },
  { path: 'garden-have', component: GardenHaveThere },
  { path: 'garden-notices', component: GardenNotices },
  { path: 'garden-shopping', component: GardenShopping },
  { path: 'home-have', component: HaveThere },
  { path: 'home-notices', component: Notices },
  { path: 'home-shopping', component: Shopping },
];
