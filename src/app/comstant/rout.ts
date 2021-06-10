import {Routes} from "@angular/router";
import {HomeComponent} from "../components-app/home/home.component";
import {POSTS, USERS} from "./resources";

export const rout: Routes = [{path: '', component: HomeComponent},
  {path: 'users-posts', loadChildren: () => import('../components-app/selector/selector.module').then(m => m.SelectorModule)},
  {path: USERS, loadChildren: () => import('../jph/user/user.module').then(m => m.UserModule)},
  {path: POSTS, loadChildren: () => import('../jph/post/post.module').then(m => m.PostModule)},
]
