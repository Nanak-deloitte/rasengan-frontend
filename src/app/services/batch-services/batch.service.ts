import { IBatch } from "./../../models/batch.model";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class BatchService {
    private batchURL = "http://localhost:8080/api/batch/getBatchDetails/";
    private allBatchesURL = "http://localhost:8080/api/batch/viewAll";

    batch: IBatch;
    // Batch= new Subject<IBatch>();
    allBatches = new Subject<IBatch[]>();
    constructor(private http: HttpClient) {}

    getBatch(batchId: number): Observable<IBatch> {
        return this.http.get<IBatch>(this.batchURL + batchId);
    }

    // public getBatch(batchId: string) {
    //     this.http.get(`${this.batchURL}/${batchId}`).subscribe((res: IBatch) => {
    //       this.batch = res;
    //       console.log("batch", this.batch);
    //       this.Batch.next(res);
    //     });
    //   }



    loadAllBatches() {
        this.http.get<IBatch[]>(this.allBatchesURL).subscribe((data) => {
            // data.forEach((d) => this.allBatches.push(d));
            this.allBatches.next(data);
        });
    }
}
