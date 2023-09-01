import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Bus } from 'src/app/shared/bus';
import { BusesService } from 'src/app/shared/buses.service';
import { Line } from 'src/app/shared/line';
import { Station } from 'src/app/shared/station';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit{
  data:Array<any>=[]
  unRepeatLines!: Line<Array<Bus>>
  lines!: Line<Array<Station>>
  unRepeatStations!: Line<Station>
  searchFilters!:Array<any>
  value: string="";
  cretria:string="";
  flag:boolean=true;
  @ViewChild("cretriaSelect",{static:true}) cretriaSelect!:any
  @ViewChild("searchValue",{static:true}) searchValue!:any
  constructor(private _busesservice:BusesService){
    this.getData()

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit(): void {

  }
  getData(){
    this._busesservice.getData().subscribe(
      res=>{
        (Object.keys(res) as (keyof typeof res)[]).forEach((key, index) => {
          this.data.push(res[key])
        });
        this.getLines()
      },
      err=>{
        alert(err)
      }
    )
  }

  getLines(){
    this.unRepeatLines={}
    this.data.map((bus)=>{
      if(!this.unRepeatLines[bus.LineName]){
        this.unRepeatLines[bus.LineName]= [bus];
      } else {
        this.unRepeatLines[bus.LineName].push(bus);
      }
    })
    let lineArr =Object.keys(this.unRepeatLines)
    this.lines = {};
    lineArr.forEach((LineName:string) => {
      this.getStations(this.unRepeatLines[LineName],LineName);
    })

  }

  getStations(repeatedStations: Array<Bus>,LineName: string){
    this.unRepeatStations={}
    let station: Station;
    repeatedStations.map((item)=>{
      station = {busCount: 0, StationID: "", StationName:"", BusModel: "", Rate: 0,BusImage:""}

      if(!this.unRepeatStations[item.StationID]){
        if(item.BusModel!=""){
        station.busCount = 1;
        }else{
          station.busCount = 0;
        }
        station.Rate = Number(item.Rate);
        station.BusModel=item.BusModel;
        station.StationID=item.StationID;
        station.StationName=item.StationName;
        station.BusImage=item.BusImage;
        this.unRepeatStations[item.StationID] = station;

      } else {
        if(item.BusModel!=""){
          this.unRepeatStations[item.StationID].busCount++
        }
        this.unRepeatStations[item.StationID].Rate+=Number(item.Rate)
      }
    })

    this.lines[LineName] = Object.values(this.unRepeatStations);
    this.getSearchCretria()
  }

  getSearchCretria(){
    var obj:Station={busCount: 0, StationID: "", StationName:"", BusModel: "", Rate: 0,BusImage:""}
    this.searchFilters=Object.keys(obj)
  }
  search(){
    console.log(this.searchValue.nativeElement.value)
    this.cretria=this.cretriaSelect.value;
    this.value=this.searchValue.nativeElement.value
  }
  searchResult(x:string,y:string){
    return String(x).includes(String(y))
  }
  clear(){
    this.searchValue.nativeElement.value=""
    this.search()
  }
}
