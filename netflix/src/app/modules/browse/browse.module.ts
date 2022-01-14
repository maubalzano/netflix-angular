import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseContainerComponent } from './components/browse-container/browse-container.component';
import { BrowseHomeComponent } from './pages/browse-home/browse-home.component';
import { PreviewCarouselComponent } from './components/preview-carousel/preview-carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { PreviewCardComponent } from './components/preview-card/preview-card.component';
import { PreviewsContainerComponent } from './components/previews-container/previews-container.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { previewsReducer } from './store/previews/reducer.previews';
import { EffectsModule } from '@ngrx/effects';
import { previewsEffects } from './store/previews/effects.previews';
import { previewsState } from './store/previews/state.previews';
import { infoReducer, InfoState } from './store/info/reducer.info';
import { infoEffects } from './store/info/effects.info';
import { MinutesToHoursPipe } from 'src/app/shared/pipes/minutes-to-hours.pipe';
import { SearchComponent } from './pages/search/search.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

export interface BrowseState {
  previews: previewsState,
  info: InfoState
}

const reducers: ActionReducerMap<BrowseState> = {
  previews: previewsReducer,
  info: infoReducer
}
@NgModule({
  declarations: [
    BrowseContainerComponent,
    BrowseHomeComponent,
    PreviewCarouselComponent,
    PreviewCardComponent,
    PreviewsContainerComponent,
    MinutesToHoursPipe,
    SearchComponent,
    InfoModalComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    MatCarouselModule,
    NgxSkeletonLoaderModule,
    StoreModule.forFeature('browse', reducers),
    EffectsModule.forFeature([previewsEffects, infoEffects])
  ]
})
export class BrowseModule { }
