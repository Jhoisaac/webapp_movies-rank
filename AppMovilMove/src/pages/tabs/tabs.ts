import { Component } from '@angular/core';

import {HomePage,AutoresPage,DirectoresPage,PeliculasPage} from  '../pages.index';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PeliculasPage;
  tab3Root = AutoresPage;
  tab4Root = DirectoresPage;

  constructor() {

  }
}
