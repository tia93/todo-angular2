import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';




=======
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
>>>>>>> 7d4184a389df47402800a1438764f867cc21bded

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TodoComponent } from './components/todo/todo.component';
import { EpochFormatterPipe } from './pipes/epoch-formatter/epoch-formatter.pipe';
import { PriorityColorPipe } from './pipes/priority-color/priority-color.pipe';
import { TagsStringPipe } from './pipes/tags-string/tags-string.pipe';
import { PrioritySortPipe } from './pipes/priority-sort/priority-sort.pipe';
import { EditComponent } from './components/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
// import { MatCommonModule } from '@angular/material/core';
=======
>>>>>>> 7d4184a389df47402800a1438764f867cc21bded




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoComponent,
    EpochFormatterPipe,
    PriorityColorPipe,
    TagsStringPipe,
    PrioritySortPipe,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
<<<<<<< HEAD
    MatCardModule,

=======
    MatCardModule
>>>>>>> 7d4184a389df47402800a1438764f867cc21bded
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
