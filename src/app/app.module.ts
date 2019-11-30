import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
import { ToolsComponent } from './tools/tools.component';
import { LearningComponent } from './learning/learning.component';
import { EnvironmentComponent } from './environment/environment.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EntrepreneurSigninComponent } from './entrepreneur-signin/entrepreneur-signin.component';
import { BasicInfoComponent } from './entrepreneur-signin/basic-info/basic-info.component';
import { HardSkillsComponent } from './entrepreneur-signin/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './entrepreneur-signin/soft-skills/soft-skills.component';
import { BusinessInfoComponent } from './entrepreneur-signin/business-info/business-info.component';
import { QuestionsComponent } from './entrepreneur-signin/questions/questions.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './notes/note/note.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NotesService } from './services/notes.service';
import { ActivitiesService } from './services/activities.service';
import { NotificationsService } from './services/notifications.service';
import { BoardComponent } from './board/board.component';
import { ChartsModule } from 'ng2-charts';
import { UserService } from './services/user.service';
import { RelojComponent } from './reloj/reloj.component';
import { PhasesService } from './services/phases.service';

const appRoutes: Routes = [
  { 
    path: '', 
    component: WelcomeComponent,
    data: { breadcrumb: 'Welcome' }
  },
  { 
    path: 'entrepreneur-signin', 
    component: EntrepreneurSigninComponent,
    data: { breadcrumb: 'Dashboard' }
  },
  {
    path: 'basic-info', 
    component: BasicInfoComponent,
    data: { breadcrumb: 'Información Básica' },
  },
  {
    path: 'hard-skills', 
    component: HardSkillsComponent,
    data: { breadcrumb: 'Hard Skills' },
  },
  {
    path: 'soft-skills', 
    component: SoftSkillsComponent,
    data: { breadcrumb: 'Soft Skills' },
  },
  {
    path: 'business-info', 
    component: BusinessInfoComponent,
    data: { breadcrumb: 'Información del negocio' },
  },
  {
    path: 'preguntas', 
    component: QuestionsComponent,
    data: { breadcrumb: 'Preguntas' },
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    data: { breadcrumb: 'Dashboard' }
  },
  { 
    path: 'herramientas', 
    component: ToolsComponent,
    data: { breadcrumb: 'Herramientas' }
  },
  { 
    path: 'aprendizaje', 
    component: LearningComponent,
    data: { breadcrumb: 'Aprendizaje' } 
  },
  { 
    path: 'entorno', 
    component: EnvironmentComponent,
    data: { breadcrumb: 'Entorno' }
  },
  { 
    path: 'notas', 
    component: NotesComponent,
    data: { breadcrumb: 'Notas' }
  },
  { 
    path: 'tablero', 
    component: BoardComponent,
    data: { breadcrumb: 'Tablero' }
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule, RouterModule.forRoot(appRoutes), ChartsModule],
  declarations: [ AppComponent, DashboardComponent, HeaderComponent, ProgressCircleComponent, ToolsComponent, LearningComponent, EnvironmentComponent, BreadcrumbComponent, WelcomeComponent, EntrepreneurSigninComponent, BasicInfoComponent, HardSkillsComponent, SoftSkillsComponent, BusinessInfoComponent, NotesComponent, NoteComponent, NotificationsComponent, ActivitiesComponent, BoardComponent, QuestionsComponent, RelojComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NotesService, ActivitiesService, NotificationsService, UserService]
})
export class AppModule { }
