/**
 * Creates the Google Form for GROUP RESULTS in the Python energy modelling workshop
 * (10 questions), plus a linked Google Sheet that collects the responses.
 *
 * How to use:
 *   1. Go to https://script.google.com and choose "New project".
 *   2. Press Ctrl+A in the editor and delete everything, so it is completely empty.
 *   3. Paste this whole file and click Save.
 *   4. In the toolbar dropdown next to "Debug", choose createWorkshopForm, then click Run.
 *   5. The Execution log shows the student link, your edit link and the responses sheet.
 *   6. Open the edit link once. If Google shows a "Publish" button, click it.
 *
 * Only the group number is required, so a group that runs out of time can still submit.
 * Response editing is on, so a group can submit early and update its answers later.
 *
 * Running the script again creates a NEW form and sheet. Delete any old copies from Drive.
 */
function createWorkshopForm() {
  var form = FormApp.create('Python for Energy Modelling: group results');
  form.setDescription(
    'One response per group, entered by the Reporter. Keep this tab open during the workshop.\n' +
    'Questions 2 and 5 are predictions: answer them BEFORE you run the matching cell in the notebook.'
  );
  form.setAllowResponseEdits(true);
  form.setCollectEmail(false);
  form.setConfirmationMessage('Thank you. Your results will appear in the debrief.');
  if (typeof form.setPublished === 'function') {
    form.setPublished(true);
  }

  var percent = FormApp.createTextValidation()
    .setHelpText('Enter a number between 0 and 100, without the % sign.')
    .requireNumberBetween(0, 100)
    .build();
  var anyNumber = FormApp.createTextValidation()
    .setHelpText('Enter a number only, without units or commas.')
    .requireNumber()
    .build();

  function numberQuestion(title, help, validation) {
    form.addTextItem().setTitle(title).setHelpText(help).setValidation(validation);
  }

  // 1. Group
  var groups = [];
  for (var g = 1; g <= 12; g++) { groups.push(String(g)); }
  form.addListItem()
    .setTitle('1. Group number')
    .setHelpText('The same number you type as MY_GROUP in the notebook.')
    .setChoiceValues(groups)
    .setRequired(true);

  // Task 1
  form.addSectionHeaderItem()
    .setTitle('Task 1: a home with solar and a battery')
    .setHelpText('Self-sufficiency rate = the share of the home\'s yearly demand met by its own solar, directly or through the battery.');
  numberQuestion(
    '2. PREDICTION (before running section 4.5): self-sufficiency rate with a 5 kWh battery (%)',
    'The value without a battery is in section 4.2. Enter your group\'s guess as a whole number.',
    percent);
  numberQuestion(
    '3. Your scenario (section 4.8): self-sufficiency rate, with battery (%)',
    'From your scenario\'s column, row "Self-sufficiency rate, with battery". Round to the nearest whole number.',
    percent);
  numberQuestion(
    '4. Your scenario (section 4.8): annual saving from the battery (GBP/yr)',
    'From your scenario\'s column, row "Annual saving from the battery". Round to the nearest pound.',
    anyNumber);

  // Task 2
  form.addSectionHeaderItem()
    .setTitle('Task 2: the merit order and a carbon price')
    .setHelpText('Notebook section 5.');
  form.addGridItem()
    .setTitle('5. PREDICTION (before running section 5.4): with a carbon price of 80 GBP/tCO2 instead of 0, what will happen?')
    .setRows(['Peak-hour price', 'Direct CO2 emissions'])
    .setColumns(['Go up', 'Stay the same', 'Go down']);
  numberQuestion(
    '6. Peak-hour price at a carbon price of 80 (GBP/MWh)',
    'From the results table in section 5.4, row 80. One decimal place is fine.',
    anyNumber);
  numberQuestion(
    '7. Direct CO2 emissions at a carbon price of 80 (tCO2)',
    'From the results table in section 5.4, row 80. Whole number, no commas.',
    anyNumber);
  numberQuestion(
    '8. Your scenario (section 5.6): peak-hour price (GBP/MWh)',
    'From your scenario\'s column, not the reference column. One decimal place is fine.',
    anyNumber);
  numberQuestion(
    '9. Your scenario (section 5.6): direct CO2 emissions (tCO2)',
    'From your scenario\'s column, not the reference column. Whole number, no commas.',
    anyNumber);

  // Explanation
  form.addParagraphTextItem()
    .setTitle('10. In one sentence, explain one of your scenario results (Task 1 or Task 2).')
    .setHelpText('Say what changed and why, for example using the merit order or the battery.');

  // Linked sheet for the live results board
  var sheet = SpreadsheetApp.create('Python for Energy Modelling: group results (responses)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  Logger.log('Link for students (make the QR code from this): ' + form.getPublishedUrl());
  Logger.log('Edit link (for you only): ' + form.getEditUrl());
  Logger.log('Responses sheet: ' + sheet.getUrl());
}
