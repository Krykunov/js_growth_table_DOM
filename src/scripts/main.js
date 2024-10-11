'use strict';

const tbody = document.querySelector('table tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const max = 10;
const min = 2;

const setButton = (el, state) => (el.disabled = state);

appendRow.addEventListener('click', (e) => {
  const rows = [...tbody.querySelectorAll('tr')];

  rows.push(rows[1].cloneNode(true));
  rows.forEach((row) => tbody.appendChild(row));

  if ([...tbody.querySelectorAll('tr')].length === max) {
    setButton(e.target, true);
  } else {
    setButton(removeRow, false);
  }
});

removeRow.addEventListener('click', (e) => {
  tbody.removeChild(tbody.lastElementChild);

  if (tbody.querySelectorAll('tr').length <= min) {
    setButton(e.target, true);
  } else {
    setButton(appendRow, false);
  }
});

appendColumn.addEventListener('click', (e) => {
  const rows = [...tbody.querySelectorAll('tr')];

  rows.forEach((row) => {
    const cell = document.createElement('td');

    row.appendChild(cell);
  });

  if (tbody.querySelectorAll('tr')[0].children.length === max) {
    setButton(e.target, true);
  } else {
    setButton(removeColumn, false);
  }
});

removeColumn.addEventListener('click', (e) => {
  const rows = [...tbody.querySelectorAll('tr')];

  rows.forEach((row) => {
    row.removeChild(row.lastElementChild);
  });

  if (tbody.querySelectorAll('tr')[0].children.length <= min) {
    setButton(e.target, true);
  } else {
    setButton(appendColumn, false);
  }
});
