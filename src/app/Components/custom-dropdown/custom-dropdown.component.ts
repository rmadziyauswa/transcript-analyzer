import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent implements OnInit {
  @Input() iconName?:string;
  @Input() labelDescription?:string;
  @Input() optionValueField:string = "";
  @Input() optionDescriptionField:string[] = [];
  @Input() list?:any[];
  @Output() change = new EventEmitter<string>();
  selectedOption:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getDescriptionField(item:any)
  {
    if(this.optionDescriptionField?.length === 1)
    {
      return item[this.optionDescriptionField[0]];
    }else if(this.optionDescriptionField?.length === 2)
    {
      return item[this.optionDescriptionField[0]] + item[this.optionDescriptionField[1]];
    }
  }

  getValueField(item:any)
  {
    return item[this.optionValueField];
  }

  selectedValue()
  {
    this.change.emit(this.selectedOption);
  }
}
