
const nyPromise = fetch ("https://api.nytimes.com/svc/books/v3/lists/overview/.json?published_date=2024-07-14&api-key=8j3RZANGkkWwSAZJzvU68mfJd6LH9Api", {
    method: "GET"
});

nyPromise.then((response => {
    console.log(response)

    const nyBody = response.text();
    nyBody.then(body => {
        const nyBodyData = JSON.parse(body);
        console.log(nyBodyData)
        // const nyList = JSON.stringify(nyBodyData);
        // document.getElementById("books").innerHTML = nyList

        let generatedHTML = "";
        for ( let list of nyBodyData.results.lists) {
            generatedHTML += `
            <div class="bookList">
                <div class="row">
                    <h2 class="listName">${list.list_name}</h2>`;
            for(let book of list.books) {
                generatedHTML += `
                    <div class=" col book">
                        <h5 class="title">${book.title}</h5>
                        <div class="over">
                            <a href="${book.amazon_product_url}" target="_blank">
                            <img src="${book.book_image}" style="width: 150px; height: auto" class="book_image">
                            </a>
                        </div>
                        <h6 class="author">Written by ${book.author}</h6>
                    </div>
                `;
            }
            generatedHTML += ` </div> </div>`;      
        }
        document.getElementById("bookList").innerHTML = generatedHTML;

    });
    
}));


