
import { ConnectionService } from '@app/services/contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  disabledSubmitButton = true;
  optionsSelect: Array<any>;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {

    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
    });
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    });
  }
}

