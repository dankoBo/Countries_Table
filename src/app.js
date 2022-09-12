// let regionList = externalService.getRegionsList()
// let languageList = externalService.getLanguagesList()
// const appRoot = document.getElementById('app-root');
// let listForm = document.querySelector('#listForm');
// let select = document.querySelector('#selectItems')

// function checkRadioButton() {
//     let radioButton = document.querySelectorAll('input[type="radio"]')
//     select.setAttribute('disabled', true)
//     radioButton.forEach(button => {
//         button.addEventListener('click', () => {
//             if (button.value === 'region' && button.checked) {
//                 select.removeAttribute('disabled')
//                 removeList(languageList)
//                 createDropDownList(regionList)

//             } else if (button.value === 'language' && button.checked) {
//                 select.removeAttribute('disabled')
//                 removeList(regionList)
//                 createDropDownList(languageList)
//             }
//         })
//     })
// }
// checkRadioButton()

// function createDropDownList(type) {
//     type.forEach(item => {
//         let option = document.createElement('option')
//         option.classList.add('new-option')
//         option.value = item
//         option.innerHTML = item
//         select.append(option)

//         select.addEventListener('change', () => {
//             let selectOptions = select.options[select.selectedIndex].text;
//             console.log(select);

//             if (type === regionList) {
//                 let getByRegion = externalService.getCountryListByRegion(selectOptions)
//                 createTable(getByRegion)
//             }

//             if (type === languageList) {
//                 let getByLanguage = externalService.getCountryListByLanguage(selectOptions)
//                 createTable(getByLanguage)
//             }
//         })
//     })
// }

// function removeList() {
//     let listItem = document.querySelectorAll('.new-option')
//     listItem.forEach(elem => {
//         elem.remove()
//     })
// }

// function createTable(arr) {
//     let table = document.querySelector('.table')

//     let tableHeader = '<table>'
//         + '<thead>'
//         + '<tr>'
//         + '  <th>Country name</th>'
//         + '  <th>Capital</th>'
//         + '  <th>World Region</th>'
//         + '  <th>Languages</th>'
//         + '  <th>Area</th>'
//         + '  <th>Flag</th>'
//         + '</tr>'
//         + '</thead>'
//         + '<tbody>'

//     let tableRows = ''
    
//     arr.forEach(elem => {
//             tableRows += '<tr>'
//             + `  <td>${elem.name}</td>`
//             + ` <td>${elem.capital} </td>`
//             + `  <td> ${elem.region}</td>`
//             + `  <td> ${Object.values(elem.languages)}</td>`
//             + `  <td> ${elem.area}</td>`
//             + `  <td> <img src=${elem.flagURL}></td>`
//             + '</tr>'
//     })

//     tableHeader += tableRows
//     tableHeader += '</tbody>'
//         + '</table>'

//     table.innerHTML = tableHeader
// }

//!---------------------------------------------------------------------------------------------------------------- Global variable

// let regionList = externalService.getRegionsList()
// let languageList = externalService.getLanguagesList()
// const appRoot = document.getElementById('app-root');
// let listForm = document.querySelector('#listForm');
// let select = document.querySelector('#selectItems')
// let list = null

// function checkRadioButton() {
//     let radioButton = document.querySelectorAll('input[type="radio"]')
//     select.setAttribute('disabled', true)
//     radioButton.forEach(button => {
//         button.addEventListener('click', () => {
//             if (button.value === 'region' && button.checked) {
//                 select.removeAttribute('disabled')
//                 removeList(languageList)
//                 createDropDownList(regionList)
//                 list = regionList
        
//             } else if (button.value === 'language' && button.checked) {
//                 select.removeAttribute('disabled')
//                 removeList(regionList)
//                 createDropDownList(languageList)
//                 list = languageList
//             }
//         })
//     })
// }
// checkRadioButton()

// function createDropDownList(type) {
//     type.forEach(item => {
//         let option = document.createElement('option')
//         option.classList.add('new-option')
//         option.value = item
//         option.innerHTML = item
//         select.append(option)
//     })
// }

// select.addEventListener('change', createTable)

// function createTable() {
//     let selectOptions = select.options[select.selectedIndex].text;
//     console.log(select);

//     if (list === regionList) {
//         let getByRegion = externalService.getCountryListByRegion(selectOptions)
//         updateTable(getByRegion)
//     }

//     if (list === languageList) {
//         let getByLanguage = externalService.getCountryListByLanguage(selectOptions)
//         updateTable(getByLanguage)
//     }
// }

// function removeList() {
//     let listItem = document.querySelectorAll('.new-option')
//     listItem.forEach(elem => {
//         elem.remove()
//     })
// }

// function updateTable(arr) {
//     let table = document.querySelector('.table')

//     let tableHeader = '<table>'
//         + '<thead>'
//         + '<tr>'
//         + '  <th>Country name</th>'
//         + '  <th>Capital</th>'
//         + '  <th>World Region</th>'
//         + '  <th>Languages</th>'
//         + '  <th>Area</th>'
//         + '  <th>Flag</th>'
//         + '</tr>'
//         + '</thead>'
//         + '<tbody>'

//     let tableRows = ''
    
//     arr.forEach(elem => {
//             tableRows += '<tr>'
//             + `  <td>${elem.name}</td>`
//             + ` <td>${elem.capital} </td>`
//             + `  <td> ${elem.region}</td>`
//             + `  <td> ${Object.values(elem.languages)}</td>`
//             + `  <td> ${elem.area}</td>`
//             + `  <td> <img src=${elem.flagURL}></td>`
//             + '</tr>'
//     })

//     tableHeader += tableRows
//     tableHeader += '</tbody>'
//         + '</table>'

//     table.innerHTML = tableHeader
// }

//!---------------------------------------------------------------------------------------------------------------------------- DATASET

let regionList = externalService.getRegionsList()
let languageList = externalService.getLanguagesList()
const appRoot = document.getElementById('app-root');
let listForm = document.querySelector('#listForm');
let select = document.querySelector('#selectItems')

function checkRadioButton() {
    let radioButton = document.querySelectorAll('input[type="radio"]')
    select.setAttribute('disabled', true)
    radioButton.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === 'region' && button.checked) {
                select.removeAttribute('disabled')
                removeList(languageList)
                createDropDownList(regionList)
                select.dataset.type = 'regionList'

            } else if (button.value === 'language' && button.checked) {
                select.removeAttribute('disabled')
                removeList(regionList)
                createDropDownList(languageList)
                select.dataset.type = 'languageList'
            }
        })
    })
}
checkRadioButton()

function createDropDownList(type) {
    type.forEach(item => {
        let option = document.createElement('option')
        option.classList.add('new-option')
        option.value = item
        option.innerHTML = item
        select.append(option)
    })
}

select.addEventListener('change', updateTable)

function updateTable(event) {
    let selectOptions = event.target.options[event.target.selectedIndex].text;
    let dataType = event.target.dataset.type

    if (dataType === 'regionList') {
        let getByRegion = externalService.getCountryListByRegion(selectOptions)
        createTable(getByRegion) 
    }

    if (dataType === 'languageList') {
        let getByLanguage = externalService.getCountryListByLanguage(selectOptions)
        createTable(getByLanguage)
    }
}

function removeList() {
    let listItem = document.querySelectorAll('.new-option')
    listItem.forEach(elem => {
        elem.remove()
    })
}

function createTable(arr) {
    let table = document.querySelector('.table')

    let tableHeader = '<table>'
        + '<thead>'
        + '<tr>'
        + '  <th>Country name</th>'
        + '  <th>Capital</th>'
        + '  <th>World Region</th>'
        + '  <th>Languages</th>'
        + '  <th>Area</th>'
        + '  <th>Flag</th>'
        + '</tr>'
        + '</thead>'
        + '<tbody>'

    let tableRows = ''
    
    arr.forEach(elem => {
            tableRows += '<tr>'
            + `  <td>${elem.name}</td>`
            + ` <td>${elem.capital} </td>`
            + `  <td> ${elem.region}</td>`
            + `  <td> ${Object.values(elem.languages)}</td>`
            + `  <td> ${elem.area}</td>`
            + `  <td> <img src=${elem.flagURL}></td>`
            + '</tr>'
    })

    tableHeader += tableRows
    tableHeader += '</tbody>'
        + '</table>'

    table.innerHTML = tableHeader
}