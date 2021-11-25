import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

const routes: Route[] = [
  // {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '', component: HomeComponent, children: [
      {
        path: 'posts', component: PostsComponent, children: [
          {path: ':id', component: PostDetailsComponent}
        ]
      },
      {path: 'comments', component: CommentsComponent}
    ]},
]

@NgModule({
  declarations: [
    AppComponent,

    PostsComponent,
    CommentsComponent,
    PostDetailsComponent,
    HomeComponent,
    PostComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
