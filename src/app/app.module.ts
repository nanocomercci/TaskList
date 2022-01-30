import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemsComponent } from './components/tasks-items/tasks-items.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'', component: TasksComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemsComponent,
    AddTaskComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes,{enableTracing:true})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
