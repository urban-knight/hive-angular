
import { ConnectionService } from '@app/services/contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  public contactForm: FormGroup;
  public disabledSubmitButton = true;
  public optionsSelect: Array<any>;

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) { }

  initContactForm() {
    this.contactForm = this.fb.group({
      contactFormName: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ])
      ],
      contactFormEmail: ['',
        Validators.compose([
          Validators.required,
          Validators.email,
        ])
      ],
      contactFormSubjects: ['', Validators.required],
      contactFormMessage: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(120)
        ])
      ],
    });
  }

  ngOnInit() {
    this.initContactForm();
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      this.contactForm.reset();
      console.log(this.contactForm);
      this.disabledSubmitButton = true;
    });
  }
}

