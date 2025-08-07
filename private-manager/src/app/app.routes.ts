import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Home } from './home/home';
import { Garden } from './garden/garden';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'home', component: Home },
  { path: 'garden', component: Garden },
];
