import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/posts/post/post-details/post-details.component";

const routes: Routes = [{
  path: '', component: PostsComponent, children:[{
    path: ':id', component: PostDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
