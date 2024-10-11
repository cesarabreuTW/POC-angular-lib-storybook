import { NgModule } from '@angular/core';

import { ButtonComponent } from '@nebula-ui/src/components/button';
import { ChipComponent } from '@nebula-ui/src/components/chip';

@NgModule({
  imports: [ButtonComponent, ChipComponent],
  exports: [ButtonComponent, ChipComponent],
  providers: [],
})
export class NebulaModule {}
