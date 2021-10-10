
import { BatchService } from "./../../services/batch-services/batch.service";
import { IBatch, ITeaminBatch } from "./../../models/batch.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import Chart from "chart.js";
import noUiSlider from "nouislider";
import { AuthService } from "src/app/services/auth-service/auth.service";
import { IUser } from "src/app/models/user.model";
import { ITeam } from "src/app/models/team.model";
import { TeamService } from "src/app/services/team-service/team.service";
import { EventService } from "src/app/services/event-service/event.service";
import { IEvent } from "src/app/models/event.model";

@Component({
    selector: "app-index",
    templateUrl: "index.component.html",
    styleUrls: ["index.component.scss"],
})
export class IndexComponent implements OnInit, OnDestroy {
    isCollapsed = true;
    teams: ITeaminBatch[];
    team:ITeam[]=[];
    batch: IBatch;
    data1: number[]=[];
    data2: number[]=[];
    data3: number[]=[];
    data4: number[]=[];
    label1: string="";
    label2:string="";
    label3: string="";
    label4:string="";
    user: IUser;
    constructor(private batchService: BatchService, private authService:AuthService, private teamService: TeamService, private eventService: EventService) {}
    batches: IBatch[] = [];
    event: IEvent;

    ngOnInit() {

        console.log(this.authService.getUserDetails());

        this.batchService.loadAllBatches();
        this.batchService.allBatches.subscribe((data) => {
            this.batches = [...data];
            console.log(data);
        });
        this.user=this.authService.getUserDetails();
        console.log(this.user);

          this.batchService.getBatch(this.user.batch.batchId).subscribe((res)=>{
            this.batch=res;
            this.teams=res.teams;
            console.log(this.batch);
            console.log(this.teams);
            for(let i=0;i<this.teams.length;i++){
              this.teamService.getTeam(this.teams[i].teamId).subscribe((res)=>{
                this.team[i]=res;
                // if(i==0){
                //   this.label1=this.team[i].teamName;
                // this.data1=this.team[i].eventScores;
                // }
                // else
                // if(i==1){
                //   this.label2=this.team[i].teamName;
                // this.data2=this.team[i].eventScores;
                // }
                // else
                // if(i==2){
                  
                //   this.label3=this.team[i].teamName;
                // this.data3=this.team[i].eventScores;
                // }
                // else{
                //   this.label4=this.team[i].teamName;
                // this.data4=this.team[i].eventScores;
                // }

                // console.log(res);
                // this.teamService.getStatusChanged.next();
  
              })

            }
            console.log("before", this.team);
          });

      
          this.eventService.getEvent(this.user.batch.batchId).subscribe((res)=>{
            this.event=res;
            console.log(this.event);
            // this.eventService.allEvents.next();
          });
     


        var body = document.getElementsByTagName("body")[0];
        body.classList.add("home-page");



        var canvas: any = document.getElementById("chartBig");
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
        gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
        gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
        var chartBig = new Chart(ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: [
                    "KUNA-1",
                    "KUNA-2",
                    "KUNA-3",
                    "KUNA-4",
                    "KUNA-5",
                    "KUNA-6",
                    "KUNA-7",
                    "KUNA-8",
                    "KUNA-9",
                    "KUNA-10",
                ],
                datasets: [
                    {
                        // label: this.label1,
                        label: "Team A's Score",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#FBA797",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#FBA797",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [140, 30, 350, 30, 250, 2140, 220, 190, 200, 250],
                        // data: this.data1,
                    },
                    {
                        label: "Team B's Score",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#DE1E2B",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#DE1E2B",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [90, 160, 65, 160, 369, 280, 220, 190, 65, 250],
                        // data: this.data2,
                    },
                    {
                      label: "Team C's Score",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#A91B60",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#A91B60",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250],
                    },
                    {
                        label: "Team D's Score",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#F9DF3C",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#F9DF3C",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [90, 160, 250, 160, 280, 200, 200, 220, 190, 300],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },

                tooltips: {
                    backgroundColor: "#fff",
                    titleFontColor: "#ccc",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "transparent",
                            },
                            ticks: {
                                display: false,
                                suggestedMin: 0,
                                suggestedMax: 350,
                                padding: 20,
                                fontColor: "#9a9a9a",
                            },
                        },
                    ],

                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0)",
                                zeroLineColor: "transparent",
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a",
                            },
                        },
                    ],
                },
            },
        });
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    }
}
