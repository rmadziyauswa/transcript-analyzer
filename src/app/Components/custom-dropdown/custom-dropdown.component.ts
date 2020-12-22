import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Call} from '../../Models/call';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent implements OnInit {
  @Input() iconName?:string;
  @Input() labelDescription:string = "";
  @Input() optionValueField:string = "";
  @Input() optionDescriptionField:string[] = [];
  @Input() list?:any[];
  @Output() change = new EventEmitter<string>();
  selectedOption:string = "";
  locale:string = "en_US";
  localeDateFormat:string = "dd.L.YYYY";
  @Input() isCallType:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getDescriptionField(item:any)
  {
    if(this.isCallType)
    {
      let call = item as Call;
      let description = `${formatDate(call.call_start_time,this.localeDateFormat,this.locale)} - ${call.customer[0].full_name}`;
      return description;
    }
    else
    {
      if(this.optionDescriptionField?.length === 1)
      {
        return item[this.optionDescriptionField[0]];
      }else if(this.optionDescriptionField?.length === 2)
      {
        return item[this.optionDescriptionField[0]] + item[this.optionDescriptionField[1]];
      }
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
