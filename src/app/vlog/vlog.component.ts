import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vlog',
  templateUrl: './vlog.component.html',
  styleUrls: ['./vlog.component.css']
})
export class VlogComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    // $('a').removeClass('activeMenu');
    // $('#blog').addClass('activeMenu');
  }

  setBlog(id:any){
    this.router.navigateByUrl('blog/details/'+id);
  }

}
