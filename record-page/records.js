import { records } from '../records-data.js';
import { findById, renderRecord } from '../utils.js';
const recordName = document.getElementById('record-name');
const recordImg = document.getElementById('record-image');
const recordDetails = document.getElementById('record-details');

const params = new URLSearchParams(window.location.search);
const record = findById(params.get('id'), records);

recordName.textContent = record.name;
recordImg.src = `../assets/${record.name}.png`;

const recordDiv = document.createElement('div');
recordDiv.textContent = renderRecord(record);
recordDiv.append(recordDetails);