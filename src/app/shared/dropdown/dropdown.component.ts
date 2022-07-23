import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() list: any;
  @Input() option: any;
  @Output() selected: EventEmitter<any> = new EventEmitter();
  selectedValue: string = '';
  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
    console.log(this.list);
    if(this.option) {
      this.selectedValue = this.option;
    }
  }

  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }


  clickedOnOption(item: any) {
    this.showDropdown = false;
    this.selectedValue = item.name;
    this.selected.emit(item);
  }
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.eRef.nativeElement.contains(event.target)) {
      console.log("clicked inside");
    } else {
      this.showDropdown = false;
      console.log("clicked outside");
    }
  }
}
