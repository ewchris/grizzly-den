import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() imageSize = 'm';
  imageSrc = 'https://media.licdn.com/dms/image/C5603AQHdC_UjagF0Bw/profile-displayphoto-shrink_200_200/0/1565882702670?e=1721260800&v=beta&t=cPIY3GXlUXpFWfDvvQizwi_cmltkd7QMKKTAbhpLFKw';
}
