import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from '../_services/messages/messages.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.sass']
})
export class ThirdComponent implements OnDestroy {
  message: string = 'default message in 3d component'
  subscription: Subscription

  constructor(private messagesService: MessagesService) {
    this.subscription = this.messagesService.getMessage().subscribe(message => {
      this.message = message ? message : '3d component got empty message'
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
