import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from '@core/guards/is-logged-in.guard';
import { CreateArticleComponent } from './create-article.component';

const routes: Routes = [{ path: '', component: CreateArticleComponent, canActivate: [IsLoggedInGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateArticleRoutingModule { }
