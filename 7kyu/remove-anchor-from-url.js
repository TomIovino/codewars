// 11/28/2022
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//P string that is a url and may / may not have an # with text after
//R string with any possible #text (after the #) removed

function removeUrlAnchor(url){
    return url.split('#')[0];
}

