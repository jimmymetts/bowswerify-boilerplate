const ContactForm 


let entriesButton = document.getElementById("journalEntry");

entriesButton.addEventListener("click", function(){
   event.preventDefault()
    
    // dateOfEntryValue()
    // conceptsCoveredValue()
    // journalEntryValue()
    // moodOfDayValue()
    console.log(dateOfEntryValue() +  conceptsCoveredValue() +  journalEntryValue() +  moodOfDayValue())
    const newJournalEntry = {
        dateOfEntry: dateOfEntryValue(),
        conceptsCovered: conceptsCoveredValue(),
        journalEntry: journalEntryValue(),
        moodOfTheDay: moodOfDayValue()
    }
}

    export default ContactForm