import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuizzComponent } from 'src/app/components/quizz/quizz.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule,QuizzComponent],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
