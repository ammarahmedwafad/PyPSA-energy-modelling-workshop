# Instructor materials

These materials are for educators running the workshop. Participants should be given the link to the [`student/`](../student/) folder only.

## Contents

| File | Purpose |
|---|---|
| `Python_Energy_Workshop_Instructor.ipynb` | The workshop notebook with the three blanks completed, plus two cells that compute the expected results for every group scenario in Tasks 1 and 2 |
| `docs/Facilitator_Pack.pdf` | Session plan, timings, roles, troubleshooting, expected results and debrief questions |
| `forms/Create_Workshop_Results_Form.gs` | Google Apps Script that creates the 10-question group results form and a linked response sheet |

## Preparing a session

1. Read the facilitator pack, in particular the session plan and the troubleshooting table.
2. Run the instructor notebook once from start to finish on the computers the participants will use. Keep it next to a copy of the `data/` folder from `student/`, or let it download the data. Note the Task 1 results and the answer-key cells at the end of sections 4.8 and 5.6.
3. Create the group results form: open script.google.com, create a new project, paste `forms/Create_Workshop_Results_Form.gs`, run `createWorkshopForm` and use the student link it prints for the QR code.
4. Share the link to the `student/` folder with participants.

## Differences from the student notebook

The instructor notebook is identical to the student notebook except that the three battery blanks in section 4.3 are completed and two additional answer-key cells are included.
