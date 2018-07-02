import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule,
    MatInputModule, MatListModule,
    MatMenuModule, MatProgressBarModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSortModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatCardModule,
        MatInputModule, MatFormFieldModule, MatSelectModule, MatRadioModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatProgressBarModule,
        MatTableModule,
        MatSortModule,
        MatDialogModule,
        MatSlideToggleModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatCardModule,
        MatInputModule, MatFormFieldModule, MatSelectModule, MatRadioModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatProgressBarModule,
        MatTableModule,
        MatSortModule,
        MatDialogModule,
        MatSlideToggleModule
    ],
    declarations: []
})
export class MaterialModule {
}
