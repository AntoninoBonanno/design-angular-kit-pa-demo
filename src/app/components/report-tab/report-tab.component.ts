import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  ItButtonDirective,
  ItCheckboxComponent,
  ItIconComponent,
  ItInputComponent,
  ItNotificationService,
  ItProgressButtonComponent,
  ItSelectComponent,
  ItTextareaComponent,
  ItValidators,
  SelectControlGroup,
  SelectControlOption
} from "design-angular-kit";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-report-tab',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ItInputComponent, ItSelectComponent, ItTextareaComponent, ItCheckboxComponent, ItButtonDirective, TranslateModule, ItProgressButtonComponent, ItIconComponent],
  templateUrl: './report-tab.component.html',
  styleUrls: ['./report-tab.component.scss']
})
export class ReportTabComponent {

  protected isLoading = false;
  protected formGroup: FormGroup;

  /**
   * Select options
   * @protected
   */
  protected options: Array<SelectControlOption> = [
    {value: null, text: 'Seleziona un elemento', disabled: true, selected: true},
    {value: 0, text: 'Motivo 0'},
  ];

  /**
   * Select groups
   * @protected
   */
  protected groups: Array<SelectControlGroup> = [
    {
      label: 'Gruppo 1', options: [
        {value: 1, text: 'Motivo 1'},
        {value: 2, text: 'Motivo 2'},
        {value: 3, text: 'Motivo 3'},
      ]
    },
    {
      label: 'Gruppo 2', options: [
        {value: 4, text: 'Motivo 4'},
        {value: 5, text: 'Motivo 5'},
        {value: 6, text: 'Motivo 6'},
      ]
    }
  ]

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly notificationService: ItNotificationService
  ) {
    this.formGroup = this.formBuilder.group({
      // FirstName is required if taxCode is empty
      fullName: [null, ItValidators.conditional(Validators.required, () => {
        return !this.formGroup.get('taxCode')?.value;
      })],

      // Use ItValidators to validate taxCode
      taxCode: [null, ItValidators.taxCode],

      // the it-input component (type=email) automatically add email validator if not present
      email: [null, Validators.required],
      reason: [null, Validators.required],

      message: [null, [Validators.required, Validators.maxLength(50)]],
      privacy: [null, Validators.requiredTrue]
    });

    this.formGroup.get('taxCode')?.valueChanges.subscribe(() => {
      // Force update validator when taxCode value change
      this.formGroup.get('fullName')?.updateValueAndValidity();
    })
  }

  protected onSubmit(): void {
    if (this.formGroup.invalid) {
      // Force show invalid fields
      return this.formGroup.markAllAsTouched();
    }

    console.log(this.formGroup.value);

    // Simulate API request
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      // Show success notification
      this.notificationService.success('Successo', 'Form inviato correttamente')
    }, 2000);
  }

}
