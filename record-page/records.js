import { records } from '../records-data.js';
import { findById, renderRecord } from '../utils.js';
const recordName = document.getElementById('record-name');
const mainElem = document.querySelector('main');

const params = new URLSearchParams(window.location.search);
const record = findById(params.get('id'), records);

recordName.textContent = record.name;

const recordDetails = renderRecord(record);
mainElem.append(recordDetails);