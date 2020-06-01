import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HistorylogComponent } from './historylog/historylog.component';
import { OnlineusersComponent } from './onlineusers/onlineusers.component';
import { ExamComponent } from './exam/exam.component';
//======================= Basic User components ===============================================//
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ManageProfileComponent } from './user/manage-profile/manage-profile.component';
import { SamplePaperComponent } from './user/sample-paper/sample-paper.component';
import { PerformanceComponent } from './user/performance/performance.component';
import { FeedbackComponent } from './user/feedback/feedback.component';
//======================= Basic Admin components ===============================================//

import { ModulesComponent } from './admin/modules/modules.component';
import { UsersComponent } from './admin/users/users.component';
import { ADashboardComponent } from './admin/a-dashboard/a-dashboard.component';
import { AExamComponent } from './admin/a-exam/a-exam.component';
import { AFeedbackComponent } from './admin/a-feedback/a-feedback.component';
import { AManageProfileComponent } from './admin/a-manage-profile/a-manage-profile.component';
import { UExamComponent } from './user/u-exam/u-exam.component';
import { ResultsComponent } from './admin/a-exam/results/results.component';
import { AddsubjectComponent } from './admin/modules/addsubject/addsubject.component';
import { ViewfeedbackComponent } from './admin/a-feedback/viewfeedback/viewfeedback.component';
import { ManagesubjectsComponent } from './admin/modules/managesubjects/managesubjects.component';
import { ManagequestionsComponent } from './admin/modules/managesubjects/managequestions/managequestions.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReviewPaperComponent } from './admin/a-exam/review-paper/review-paper.component';
import { PaperComponent } from './user/u-exam/paper/paper.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    HistorylogComponent,
    OnlineusersComponent,
    ExamComponent,
    ManageProfileComponent,
    SamplePaperComponent,
    PerformanceComponent,
    FeedbackComponent,
    ModulesComponent,
    UsersComponent,
    ADashboardComponent,
    AExamComponent,
    AFeedbackComponent,
    AManageProfileComponent,
    UExamComponent,
    ResultsComponent,
    AddsubjectComponent,
    ViewfeedbackComponent,
    ManagesubjectsComponent,
    ManagequestionsComponent,
    ForgotPasswordComponent,
    EditProfileComponent,
    ReviewPaperComponent,
    PaperComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',component:HomeComponent },
      { path: 'home',component:HomeComponent },
      { path: 'login',component:LoginComponent },
      { path: 'register',component:RegisterComponent },
      { path: 'about',component:AboutComponent },
      { path: 'contact',component:ContactComponent },
      { path: 'historylog',component:HistorylogComponent, canActivate:[AuthService] },
      { path: 'onlineusers',component:OnlineusersComponent, canActivate:[AuthService] },
      { path: 'exam',component:ExamComponent, canActivate:[AuthService] },
      //{ path: 'user/dashboard',component:DashboardComponent, canActivate:[AuthService] },
      { path: 'user/exam/:SubId',component:UExamComponent, canActivate:[AuthService] },
      { path: 'user/home',component:HomeComponent, canActivate:[AuthService] },
      { path: 'user/manageprofile',component:ManageProfileComponent, canActivate:[AuthService] },
      { path: 'user/samplepapers',component:SamplePaperComponent, canActivate:[AuthService] },
      { path: 'user/performance',component:PerformanceComponent, canActivate:[AuthService] },
      { path: 'user/feedback',component:FeedbackComponent, canActivate:[AuthService] },
      { path: 'user/uexam/paper/:SubId',component:PaperComponent, canActivate:[AuthService] },
      //{ path: 'admin/dashboard',component:ADashboardComponent, canActivate:[AuthService] },
      { path: 'admin/home',component:HomeComponent, canActivate:[AuthService] },
      { path: 'admin/modules',component:ModulesComponent, canActivate:[AuthService] },
      { path: 'admin/modules/addsubject',component:AddsubjectComponent, canActivate:[AuthService] },
      { path: 'admin/modules/managesubjects',component:ManagesubjectsComponent, canActivate:[AuthService] },
      { path: 'admin/modules/managesubjects/manageque/:SubId',component:ManagequestionsComponent, canActivate:[AuthService] },
      { path: 'admin/users',component:UsersComponent, canActivate:[AuthService] },
      { path: 'admin/exam',component:AExamComponent, canActivate:[AuthService] },
      { path: 'admin/exam/results',component:ResultsComponent, canActivate:[AuthService] },
      { path: 'admin/exam/reviewpaper',component:ReviewPaperComponent, canActivate:[AuthService] },
      { path: 'admin/feedback',component:AFeedbackComponent, canActivate:[AuthService] },
      { path: 'admin/feedback/viewfb/:FId',component:ViewfeedbackComponent, canActivate:[AuthService] },      
      { path: 'admin/manageprofile',component:AManageProfileComponent, canActivate:[AuthService] },
      { path: 'forgotpassword', component:ForgotPasswordComponent}
      
    ])
  ],
  providers: [DataService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
