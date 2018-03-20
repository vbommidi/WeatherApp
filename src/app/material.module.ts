import { NgModule } from "@angular/core";
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,MatGridListModule,MatListModule } from "@angular/material";

@NgModule({
  imports:[
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatListModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatListModule
  ]
})

export class MaterialModule{ }
