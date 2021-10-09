import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IEvent } from 'src/app/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {


private allEventsURL = "http://localhost:8080/api/event/viewUpcomingEvent/";

event: IEvent;
allEvents = new Subject<IEvent[]>();
constructor(private http: HttpClient) {}

getEvent(batchId: number): Observable<IEvent> {
    return this.http.get<IEvent>(this.allEventsURL + batchId);
}

}



