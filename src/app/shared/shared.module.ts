import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule, PanelModule, TableModule, CardModule],
  exports: [CommonModule, ReactiveFormsModule, RouterModule, PanelModule, TableModule, CardModule],
  providers: []
})
export class SharedModule {}
