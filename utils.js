export function renderRecord(record) {

    const div = document.createElement('div');
    div.classList.add('record');

    const h2 = document.createElement('h2');
    h2.textContent = `${record.name} is a ${record.genre} album recorded by ${record.artist}.`;

    const img = document.createElement('img');
    img.src = `../assets/${record.name}.png`;

    div.append(h2, img);
    return div;
}

export function simpleRender(record) {

    const div = document.createElement('div');
    div.classList.add('record');

    const p = document.createElement('p');
    p.textContent = record.name;

    const img = document.createElement('img');
    img.src = record.image;

    const a = document.createElement('a');
    a.href = `./record-page/?id=${record.id}`;

    a.append(img);
    div.append(p, a);
    return div;
}


export function findById(id, data) {
    return data.find((item) => item.id === id);
}