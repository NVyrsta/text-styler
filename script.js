'use strict';
//--------------functions-------------------------
const getS = selector => document.querySelector(selector);
const getSA = selector => document.querySelectorAll(selector);

// ----------------addEventListener----------------
getS('.btn-edit').addEventListener('click', () => {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
});

getS('.btn-save').addEventListener('click', () => {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
});

getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
});
//--------------------------Font size & font family--------------------------
getSA('input[type="radio"]').forEach(b =>
    b.addEventListener('click', event => {
        getS('.top-block').style.fontSize = event.target.value;
    })
);

getS('#font-family').addEventListener('change', event => {
    getS('.top-block').style.fontFamily = event.target.value;
});
//-------------------------------Change text & background color----------------
let colorsTx = [
    'darkslateblue',
    'green',
    'darkred',
    'darkcyan',
    'deeppink',
    'red',
    'white',
    'purple',
    'darkblue',
];
let colorsBg = [
    'darkslateblue',
    'green',
    'darkred',
    'darkcyan',
    'deeppink',
    'red',
    'white',
    'purple',
    'darkblue',
];
for (let i = 0; i < getS('.colors-tx').children.length; i++) {
    getS('.colors-tx').children[i].style.backgroundColor = colorsTx[i];
    getS('.colors-tx').children[i].addEventListener('click', function() {
        getS('.top-block').style.color = this.style.backgroundColor;
        getS('.colors-tx').classList.add('hidden');
    });
}
for (let i = 0; i < getS('.colors-bg').children.length; i++) {
    getS('.colors-bg').children[i].style.backgroundColor = colorsBg[i];
    getS('.colors-bg').children[i].addEventListener('click', function() {
        getS('.top-block').style.backgroundColor = this.style.backgroundColor;
        getS('.colors-bg').classList.add('hidden');
    });
}

getS('.btn-text-color').addEventListener('click', () => {
    getS('.colors-tx').classList.remove('hidden');
});
getS('.btn-bg-color').addEventListener('click', () => {
    getS('.colors-bg').classList.remove('hidden');
});
//------------------------------------Bold text--------------------------------
getS('input[name="bold"]').addEventListener('click', event => {
    event.target.checked ?
        getS('.top-block').classList.add('bold') :
        getS('.top-block').classList.remove('bold');
});
//----------------------------Italic text----------------------------------------
getS('input[name="cursive"]').addEventListener('click', event => {
    event.target.checked ?
        getS('.top-block').classList.add('cursive') :
        getS('.top-block').classList.remove('cursive');
});

getS('.btn-add').addEventListener('click', () => {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
});

// --------------------add list on page----------------------------
getS('.btn-list').addEventListener('click', () => {
    getS('.create-list').classList.remove('hidden');
    getS('.create-table').classList.add('hidden');
});
const list = document.forms['form-list'];
getS('.btn-create-list').addEventListener('click', () => {
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li>item ${i + 1}</li>`;
    }
    getS('.edit-area').value += '</ul>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    list.count.value = '';
    getS('.create-list').classList.add('hidden');
    getS('.btn-list').checked = false;
});

// --------------------add table on page----------------------------
getS('.btn-table').addEventListener('click', () => {
    getS('.create-list').classList.add('hidden');
    getS('.create-table').classList.remove('hidden');
});
const table = document.forms['form-table'];
getS('.btn-create-table').addEventListener('click', () => {
    let countTR = table.countTR.value;
    let countTD = table.countTD.value;
    let widthTD = table.widthTD.value;
    let heightTD = table.heightTD.value;
    let border = table.border.value;
    let colorBorder = table.colorBorder.value;
    let styleBorder = table.styleBorder.value;
    getS('.edit-area').value += `<table>`;
    let tdList = ``;
    for (let i = 0; i < countTD; i++) {
        tdList += `<td style="width:${widthTD}px; height:${heightTD}px; border: ${border}px ${styleBorder} ${colorBorder} "> TD </td>`;
    }
    tdList = `<tr>${tdList}</tr>`;
    for (let j = 0; j < countTR; j++) {
        getS('.edit-area').value += tdList;
    }
    getS('.edit-area').value += '</table>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    getSA('input[placeholder]').forEach(inp => (inp.value = ``));
});
//--------------------------------------------------------------------------------