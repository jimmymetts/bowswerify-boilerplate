getData().then(myParsedEntries => {      /* from entriesDOM D Journal */

    myParsedEntries.forEach(entry => {

    document.querySelector("#entryContainer").innerHTML += `
    <div class = “domEl”>
    <h2>Name - ${entry.dateOfEntry}</h2>
     <h2>Phone Number - ${entry.conceptsCovered}</h2>
     <h2>Address - ${entry.journalEntry}</h2>
     <hr>
     </div>
    `;
    })

    })