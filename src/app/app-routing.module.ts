import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'canada-summary',
    loadChildren: () => import('./pages/canada-summary/canada-summary.module').then(m => m.CanadaSummaryPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
