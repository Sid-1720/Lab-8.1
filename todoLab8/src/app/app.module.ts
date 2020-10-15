import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDetailsComponent } from './todoLab8/todo-details/todo-details.component';
import { TodoListComponent } from './todoLab8/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailsComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
