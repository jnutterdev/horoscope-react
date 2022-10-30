export const getSigns = () => {

    return fetch('http://sandipbgt.com/theastrologer/api/sunsigns/')
    .then(response => response.json())

}