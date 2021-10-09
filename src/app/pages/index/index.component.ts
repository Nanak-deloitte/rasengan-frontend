import { AuthService } from "./../../services/auth-service/auth.service";
import { BatchService } from "./../../services/batch-services/batch.service";
import { IBatch } from "./../../models/batch.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import Chart from "chart.js";
import noUiSlider from "nouislider";

@Component({
    selector: "app-index",
    templateUrl: "index.component.html",
    styleUrls: ["index.component.scss"],
})
export class IndexComponent implements OnInit, OnDestroy {
    isCollapsed = true;
    items: number[] = [1, 2, 3, 4];
    constructor(
        private batchService: BatchService,
        private auth: AuthService
    ) {}
    batches: IBatch[] = [];

    ngOnInit() {
        
        console.log(this.auth.getUserDetails());
        
        this.batchService.loadAllBatches();
        this.batchService.allBatches.subscribe((data) => {
            this.batches = [...data];
            console.log(data);
        });
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("landing-page");

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
