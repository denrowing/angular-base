// создать переход на url /posts
// при переходе  отобразить все title постов с jsonplaceholder.
//   У каждого поста есть кнопка, при клике на которую отображается детальная информация про пост.
//   Детальная информация про пост передается при помощи state

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {

}
