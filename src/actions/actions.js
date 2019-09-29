const SEARCH_FILE = {
    type: 'SEARCH_FILE',
    fileName: ''
}

function searchFile(name) {
    return {
        type: 'SEARCH_FILE',
        fileName: name
    }
}

export {searchFile};