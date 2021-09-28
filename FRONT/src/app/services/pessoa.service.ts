import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from "../models/pessoa";

@Injectable({
    providedIn: "root",
})
export class PessoaService {
    private baseURL = "http://localhost:5000/Pessoa";

    constructor(private http: HttpClient) {}

    list(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(`${this.baseURL}/create`);
    }

    create(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.post<Pessoa>(`${this.baseURL}`, pessoa);
    }
}