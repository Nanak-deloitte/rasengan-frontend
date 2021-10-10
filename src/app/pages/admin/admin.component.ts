import { BatchService } from "./../../services/batch-services/batch.service";
import { IBatch } from "./../../models/batch.model";
import { IUser } from "./../../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";

@Component({
    selector: "app-admin",
    templateUrl: "./admin.component.html",
    styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
    allUsers: IUser[] = [];
    allBatches: IBatch[] = [];
    constructor(
        private http: HttpClient,
        private fb: FormBuilder,
        private batchService: BatchService
    ) {}

    batchForm = this.fb.group({
        batchName: ["", Validators.required],
        newBatchUsers: new FormArray([]),
    });

    ngOnInit(): void {
        this.batchService.allBatches.subscribe((batches) => {
            this.allBatches = [...batches];
        });

        this.http
            .get<IUser[]>("http://localhost:8080/api/user/allUsers")
            .subscribe((data) => {
                data.forEach((d) => {
                    this.allUsers.push(d);
                    if (
                        d.batch == null &&
                        d.isSectionLead == false &&
                        d.team == null &&
                        d.admin == false
                    ) {
                        this.allUsers.push(d);
                    }
                });
            });
    }

    onCheckChange(event) {
        const formArray: FormArray = this.batchForm.get(
            "newBatchUsers"
        ) as FormArray;

        /* Selected */
        if (event.target.checked) {
            // Add a new control in the arrayForm
            formArray.push(new FormControl(event.target.value));
        } else {
            /* unselected */
            // find the unselected element
            let i: number = 0;

            formArray.controls.forEach((ctrl: FormControl) => {
                if (ctrl.value == event.target.value) {
                    // Remove the unselected element from the arrayForm
                    formArray.removeAt(i);
                    return;
                }

                i++;
            });
        }
    }

    createBatch() {
        // console.log(this.batchForm.value);
        let batchName = this.batchForm.value.batchName;
        let batchMembers = [...this.batchForm.value.newBatchUsers];

        this.http
            .post<IBatch>("http://localhost:8080/api/batch/addBatch", {
                batchName: batchName,
            })
            .subscribe((data) => {
                this.http.post(
                    "http://localhost:8080/api/batch/addParticipant",
                    {
                        idList: batchMembers,
                        batchId: data.batchId,
                    }
                );
                alert("Batch Created");
            });
    }

    chooseBatch(event: any) {
        console.log(event.target.innerHTML);
        
    }

    loadAllBatches() {
        // this.batchService.loadAllBatches();
    }
}
