import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessagesService } from "../_services/messages/messages.service"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  myForm: FormGroup
  @Input() curForm: Object = {}
  @Input() curFormIndex: number = null

  constructor(private fb: FormBuilder, private messagesService: MessagesService) { }

  sendMessage(newMessage): void {
    this.messagesService.sendMessage(newMessage)
  }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.myForm = this.fb.group({
      newMessage: [null]
    });
  }

  onSubmit() {
    const controls = this.myForm.controls
    const { newMessage: { value: newMessage } } = controls
    this.sendMessage(`${newMessage} FROM ${this.curFormIndex} form`)
  }

}
