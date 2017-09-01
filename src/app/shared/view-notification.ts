import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
@Injectable()
export class ViewNotificationUtils {
    constructor() { }

    openToolTipsNotification(notificationBar: MdSnackBar,message: string, action: string) {
        notificationBar.open(message, action, {
            duration: 3000,
        });
    }
}
