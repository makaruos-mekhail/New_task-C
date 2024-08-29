import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data:any;

  
  constructor(@Inject(DOCUMENT) private documents: any,private sharedService:SharedService){}
  
  ngOnInit(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });  


    this.sharedService.getCard().pipe().subscribe({
      next: (data) => {
        this.data = data.data;
        console.log(this.data);
      },
      error: (err) => {
        console.error(err);
        this.sharedService.setIsLoading(false);
      }
    });

    }
}
