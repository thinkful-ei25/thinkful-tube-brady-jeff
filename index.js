//create a function that listens for a submit on the form.
//Store the value of the submit and get this over to Youtube.

function talkToYoutube(searchTerm, callback) {
    //collects data from Youtube API and passes it forward to handleFormSubmit
    const query = {
        part: 'snippet',
        key: 'AIzaSyBOZ_IKeZUJBN2TbZbuWNWul8_yrO_WiFM',
        q: searchTerm
    }

    $.getJSON("https://www.googleapis.com/youtube/v3/search", query, callback);


}


function resultsTemplate(){
    //create an individual listing for each result that matches the query.
}

function render(data) {
    //this would input our search results into the results div
    //calls the resultsTemplate() and then maps all of the individual results into a single output
    try {
        console.log(data);
    }
    catch {
        console.error('Did not work');
    }

}

function handleFormSubmit() {
    //create a function that listens for a submit on the form.
    //Store the value of the submit and get this over to Youtube.
    
    $('.js-search-form').submit(event => {
        event.preventDefault();
        //access the value from the search form and store this 
        const query = $(event.currentTarget).find('.js-search-input').val();
        console.log(`received query: ${query}`);
        $('.js-search-input').val('');
        talkToYoutube(query, render);


    }
);

}



$(handleFormSubmit);