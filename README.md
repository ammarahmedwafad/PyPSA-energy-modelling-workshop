# Python for Energy System Modelling: PyPSA workshop

Hands-on learning materials for a one-hour workshop on energy system modelling with Python, first delivered to MSc Sustainable Engineering: Energy students at Nottingham Trent University in 2026.

The workshop is about **modelling and analysis, not programming**. The model code is provided. Participants run it, interpret the results, test scenarios and explain what drives them, working in small groups.

| Task | Question | Methods |
|---|---|---|
| 1. A home with solar and a battery | How much of a Nottingham home's electricity can 4 kWp of rooftop solar and a 5 kWh battery provide? | Hourly PVGIS solar data, an hour-by-hour battery model, self-consumption and self-sufficiency rates, battery losses and power limits |
| 2. The merit order and a carbon price | What does a carbon price do to electricity prices and emissions? | A least-cost dispatch model in PyPSA, short-run marginal cost, clearing prices, direct CO2 emissions, coal-to-gas fuel switching |

## Open the notebook

| Notebook | Google Colab | Download |
|---|---|---|
| Student version (three short blanks to complete) | [Open in Colab](https://colab.research.google.com/github/ammarahmedwafad/pypsa-energy-modelling-workshop/blob/main/Python_Energy_Workshop_Student.ipynb) | [Python_Energy_Workshop_Student.ipynb](Python_Energy_Workshop_Student.ipynb) |
| Instructor version (completed, with answer keys) | [Open in Colab](https://colab.research.google.com/github/ammarahmedwafad/pypsa-energy-modelling-workshop/blob/main/Python_Energy_Workshop_Instructor.ipynb) | [Python_Energy_Workshop_Instructor.ipynb](Python_Energy_Workshop_Instructor.ipynb) |

The Colab links work once the repository is public.

## Running the notebooks

**JupyterLab (Anaconda).** Open Anaconda Navigator, launch JupyterLab, open the notebook from the folder where you saved this repository, and run the first cell. If you are asked to choose a kernel, choose Python 3 (Python 3.11 or later).

**Google Colab.** Use the links above, or go to colab.research.google.com and choose File > Upload notebook.

**Your own Python environment.** Python 3.11 or later with pandas, NumPy, Matplotlib and requests. Then run the notebook from the repository folder.

In every case, the first code cell installs PyPSA if it is missing. It reads the installed pandas version and chooses a tested PyPSA release to match (PyPSA 1.2.1 for pandas 2, PyPSA 1.4.0 for pandas 3), without changing any library already installed. The notebooks have been tested in Anaconda 2025.12 and 2026.07, in Google Colab, and with current releases of each library.

Each notebook explains itself step by step, including a table of the menu commands for JupyterLab and Colab and a guide to common errors.

## What is in this repository

```
pypsa-energy-modelling-workshop/
├── Python_Energy_Workshop_Student.ipynb      Student notebook
├── Python_Energy_Workshop_Instructor.ipynb   Instructor notebook with completed code and answer keys
├── data/
│   ├── pvgis_hourly_2019.json                Hourly PV output from PVGIS (cached, so the notebook can run offline)
│   └── home.csv                              Hourly solar generation and household demand used in Task 1
├── docs/
│   ├── Student_Guide_Workshop.pdf            Steps, roles, key terms and help for groups
│   ├── Student_Guide_Learning_Resources.pdf  Curated links: Python, PyPSA, courses, open data, papers
│   └── Facilitator_Pack.pdf                  Session plan, timings, answer keys and debrief
├── slides/
│   └── Workshop_Slides.pdf                   Presentation used in the session
├── forms/
│   └── Create_Workshop_Results_Form.gs       Google Apps Script that builds the group results form
├── LICENSE                                   MIT licence for code
├── LICENSE-docs.md                           CC BY 4.0 licence for documents
└── CITATION.cff                              How to cite these materials
```

Figures and tables produced by the notebooks are saved in an `outputs/` folder when you run them. That folder is not kept in the repository.

## Data

- **Solar generation:** modelled hourly AC output of a 4 kWp, 35° south-facing system at Nottingham Trent University's Clifton campus (52.912° N, 1.184° W), 14 % system loss, weather year 2019, radiation database PVGIS-SARAH3. Source: PVGIS 5.3, European Commission Joint Research Centre. The data are free for public use with acknowledgement: **PVGIS © European Communities, 2001-2026**.
- **Household demand:** a synthetic hourly profile built in the notebook, scaled to Ofgem's 2026 medium Typical Domestic Consumption Value of 2,500 kWh a year. It is not a measurement of a real home.
- **Power system (Task 2):** a stylised one-day system loosely resembling Great Britain in the late 2010s, with illustrative costs and emission intensities documented in the notebook.

Tariffs and carbon prices reflect October 2026 values and are documented, with sources, in the notebooks.

## Learning outcomes

By the end of the workshop, participants should be able to:

1. load and check a year of hourly energy data in Python;
2. build a simple hour-by-hour battery model and calculate the self-consumption rate, self-sufficiency rate, grid imports and net energy cost;
3. explain how battery losses and power limits change the result, and why an idealised model gives an upper bound;
4. build and solve a small least-cost dispatch model in PyPSA;
5. explain how a carbon price changes the merit order, the clearing price and emissions, and state the main limitations of each model.

## Limitations

These are teaching models. The demand profile is smooth and synthetic, solar output is modelled for a single weather year, the battery follows a simple rule rather than an optimised schedule, and the power system is a single day with one bus and no start-up costs. The notebooks discuss each limitation and the direction in which it biases the results.

## Acknowledgements and key references

- Brown, T., Hörsch, J. and Schlachtberger, D. (2018) 'PyPSA: Python for Power System Analysis', *Journal of Open Research Software*, 6(1), p. 4. https://doi.org/10.5334/jors.188
- Luthander, R., Widén, J., Nilsson, D. and Palm, J. (2015) 'Photovoltaic self-consumption in buildings: a review', *Applied Energy*, 142, pp. 80-94. https://doi.org/10.1016/j.apenergy.2014.12.028
- European Commission Joint Research Centre, *Photovoltaic Geographical Information System (PVGIS)*, version 5.3.

The full reference list is in section 7 of each notebook.

## Licence

Code is released under the [MIT licence](LICENSE). Documents and slides are released under [CC BY 4.0](LICENSE-docs.md). PVGIS data remain subject to the PVGIS terms of use.

## Author

Ammar Ahmed Wafad, MSc Sustainable Engineering: Energy (Nottingham Trent University). Related open-source work: [PyPSA-IMG](https://github.com/ammarahmedwafad/pypsa-img), an industrial microgrid model built on PyPSA.

Questions and suggestions are welcome through GitHub Issues.
