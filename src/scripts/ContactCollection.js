function ContactCollection() {                                                     /* (from dailey journal)function*/
    const el = document.querySelector("#entryContainer");  /*rename*/            /*queryselector targets first element that matches target*/
    el.innerHTML = "";                                              /*empty string*/
    return fetch("http://localhost:3000/entries")                         /*fetch local host*/
        .then(response => response.json())
}

export default ContactCollection
