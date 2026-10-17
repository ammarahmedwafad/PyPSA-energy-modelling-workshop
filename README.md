# Python for Energy System Modelling: PyPSA workshop

Hands-on learning materials for a one-hour workshop on energy system modelling with Python, designed for postgraduate students in energy and sustainable engineering and first delivered at a UK university in 2026.

The workshop is about **modelling and analysis, not programming**. The model code is provided. Participants run it, interpret the results, test scenarios and explain what drives them, working in small groups.

| Task | Question | Methods |
|---|---|---|
| 1. A home with solar and a battery | How much of a UK home's electricity can 4 kWp of rooftop solar and a 5 kWh battery provide? | Hourly PVGIS solar data, an hour-by-hour battery model, self-consumption and self-sufficiency rates, battery losses and power limits |
| 2. The merit order and a carbon price | What does a carbon price do to electricity prices and emissions? | A least-cost dispatch model in PyPSA, short-run marginal cost, clearing prices, direct CO2 emissions, coal-to-gas fuel switching |

## Where to start

| Folder | For | Contents |
|---|---|---|
| [`student/`](student/) | Participants | Workshop notebook, data, student guide, learning resources and slides |
| [`instructor/`](instructor/) | Educators running the workshop | Completed notebook with answer keys and facilitator pack |

If you are taking part in the workshop, open the [`student/`](student/) folder.

## Repository structure

```
PyPSA-energy-modelling-workshop/
├── student/
│   ├── Python_Energy_Workshop_Student.ipynb      Workshop notebook (three short blanks to complete)
│   ├── data/
│   │   ├── pvgis_hourly_2019.json                Hourly PV output from PVGIS (cached, so the notebook can run offline)
│   │   └── home.csv                              Hourly solar generation and household demand used in Task 1
│   ├── docs/
│   │   ├── Student_Guide_Workshop.pdf            Steps, roles, key terms and help for groups
│   │   └── Student_Guide_Learning_Resources.pdf  Curated links: Python, PyPSA, courses, open data and papers
│   └── slides/
│       └── Workshop_Slides.pdf                   Presentation used in the session
├── instructor/
│   ├── Python_Energy_Workshop_Instructor.ipynb   Completed notebook with answer keys for every group scenario
│   └── docs/
│       └── Facilitator_Pack.pdf                  Session plan, timings, troubleshooting, expected results and debrief
├── LICENSE                                       MIT licence for code
├── LICENSE-docs.md                               CC BY 4.0 licence for documents
└── CITATION.cff                                  How to cite these materials
```

Figures and tables produced by the notebooks are saved in an `outputs/` folder when they run. That folder is not kept in the repository.

## Data

- **Solar generation:** modelled hourly AC output of a 4 kWp, 35° south-facing system in Nottingham, UK (52.912° N, 1.184° W), 14 % system loss, weather year 2019, radiation database PVGIS-SARAH3. Source: PVGIS 5.3, European Commission Joint Research Centre. The data are free for public use with acknowledgement: **PVGIS © European Communities, 2001-2026**.
- **Household demand:** a synthetic hourly profile built in the notebook, scaled to Ofgem's 2026 medium Typical Domestic Consumption Value of 2,500 kWh a year. It is not a measurement of a real home.
- **Power system (Task 2):** a stylised one-day system loosely resembling Great Britain in the late 2010s, with illustrative costs and emission intensities documented in the notebook.

Tariffs and carbon prices reflect October 2026 values and are documented, with sources, in the notebook.

## Learning outcomes

By the end of the workshop, participants should be able to:

1. load and check a year of hourly energy data in Python;
2. build a simple hour-by-hour battery model and calculate the self-consumption rate, self-sufficiency rate, grid imports and net energy cost;
3. explain how battery losses and power limits change the result, and why an idealised model gives an upper bound;
4. build and solve a small least-cost dispatch model in PyPSA;
5. explain how a carbon price changes the merit order, the clearing price and emissions, and state the main limitations of each model.

## Limitations

These are teaching models. The demand profile is smooth and synthetic, solar output is modelled for a single weather year, the battery follows a simple rule rather than an optimised schedule, and the power system is a single day with one bus and no start-up costs. The notebook discusses each limitation and the direction in which it biases the results.

## Acknowledgements and key references

- Brown, T., Hörsch, J. and Schlachtberger, D. (2018) 'PyPSA: Python for Power System Analysis', *Journal of Open Research Software*, 6(1), p. 4. https://doi.org/10.5334/jors.188
- Luthander, R., Widén, J., Nilsson, D. and Palm, J. (2015) 'Photovoltaic self-consumption in buildings: a review', *Applied Energy*, 142, pp. 80-94. https://doi.org/10.1016/j.apenergy.2014.12.028
- European Commission Joint Research Centre, *Photovoltaic Geographical Information System (PVGIS)*, version 5.3.

The full reference list is in section 7 of the notebook.

## Licence

Code is released under the [MIT licence](LICENSE). Documents and slides are released under [CC BY 4.0](LICENSE-docs.md). PVGIS data remain subject to the PVGIS terms of use.

## Author

Ammar Ahmed Wafad. Related open-source work: [PyPSA-IMG](https://github.com/ammarahmedwafad/pypsa-img), an industrial microgrid model built on PyPSA.

Questions and suggestions are welcome through GitHub Issues.
