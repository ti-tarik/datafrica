import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksSubject$ = new BehaviorSubject<any>([]);
  tasksSubject = this.tasksSubject$.asObservable();

  constructor() { }

  async getAll() {

    const tasks = [
      {
        "taskid": 1000001,
        "caseid": 2000001,
        "dateready": "2025-03-19T08:30:00",
        "dateassignee": "2025-03-19T09:00:00",
        "datearchivee": "2025-03-19T12:00:00",
        "executeeparmatricule": "1234",
        "acteur": "CSF",
        "objectif": "Dans le délai",
        "matricule": "1000001",
        "reference": "CDB123",
        "radical": "7412656",
        "full_name": "RASOROFORINA Mamitiana",
        "fc": "5970-Lalatina",
        "piece_identity": "101 221 123 657",
        "offre": "MALAKILAKY",
        "marche": "DGE",
        "statut": "Clôturé",
        "assignation": "RAZAFINDRAHAINGO Lolotte"
      },
      {
        "taskid": 1000002,
        "caseid": 2000002,
        "dateready": "2025-03-19T10:00:00",
        "dateassignee": "2025-03-19T10:15:00",
        "datearchivee": "2025-03-19T13:00:00",
        "executeeparmatricule": "5678",
        "acteur": "OPE",
        "objectif": "Hors délai",
        "matricule": "1000002",
        "reference": "CDB123",
        "radical": "7412656",
        "full_name": "RASOROFORINA Mamitiana",
        "fc": "5970-Lalatina",
        "piece_identity": "101 221 123 657",
        "offre": "MALAKILAKY",
        "marche": "DGE",
        "statut": "Clôturé",
        "assignation": "RAZAFINDRAHAINGO Lolotte"
      },
      {
        "taskid": 1000003,
        "caseid": 2000003,
        "dateready": "2025-03-19T08:30:00",
        "dateassignee": "2025-03-19T09:00:00",
        "datearchivee": "2025-03-19T12:00:00",
        "executeeparmatricule": "1234",
        "acteur": "CSF",
        "objectif": "En retard",
        "matricule": "1000003",
        "reference": "CDB123",
        "radical": "7412656",
        "full_name": "RASOROFORINA Mamitiana",
        "fc": "5970-Lalatina",
        "piece_identity": "101 221 123 657",
        "offre": "MALAKILAKY",
        "marche": "DGE",
        "statut": "Clôturé",
        "assignation": "RAZAFINDRAHAINGO Lolotte"
      },
      {
        "taskid": 1000004,
        "caseid": 2000004,
        "dateready": "2025-03-19T10:00:00",
        "dateassignee": "2025-03-19T10:15:00",
        "datearchivee": "2025-03-19T13:00:00",
        "executeeparmatricule": "5678",
        "acteur": "OPE",
        "objectif": "Hors délai",
        "matricule": "1000004",
        "reference": "CDB123",
        "radical": "7412656",
        "full_name": "RASOROFORINA Mamitiana",
        "fc": "5970-Lalatina",
        "piece_identity": "101 221 123 657",
        "offre": "MALAKILAKY",
        "marche": "DGE",
        "statut": "Clôturé",
        "assignation": "RAZAFINDRAHAINGO Lolotte"
      },
      {
        "taskid": 1000005,
        "caseid": 2000005,
        "dateready": "2025-03-19T08:30:00",
        "dateassignee": "2025-03-19T09:00:00",
        "datearchivee": null,
        "executeeparmatricule": "1234",
        "acteur": "CSF",
        "objectif": "Dans le délai",
        "matricule": "1000005",
        "reference": "CDB123",
        "radical": "7412656",
        "full_name": "RASOROFORINA Mamitiana",
        "fc": "5970-Lalatina",
        "piece_identity": "101 221 123 657",
        "offre": "MALAKILAKY",
        "marche": "DGE",
        "statut": "Clôturé",
        "assignation": "RAZAFINDRAHAINGO Lolotte"
      },
      {
        "taskid": 1000006,
        "caseid": 2000006,
        "dateready": "2025-03-19T10:00:00",
        "dateassignee": "2025-03-19T10:15:00",
        "datearchivee": "2025-03-19T13:00:00",
        "executeeparmatricule": "5678",
        "acteur": "Conseiller client",
        "objectif": "Hors délai",
        "matricule": "1000006",
        "reference": "CDB123",
        "radical": "7412656",
        "full_name": "RASOROFORINA Mamitiana",
        "fc": "5970-Lalatina",
        "piece_identity": "101 221 123 657",
        "offre": "MALAKILAKY",
        "marche": "DGE",
        "statut": "Clôturé",
        "assignation": "RAZAFINDRAHAINGO Lolotte"
      }
    ]

    return this.tasksSubject$.next(tasks);
  }
}
