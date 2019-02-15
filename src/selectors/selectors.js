//data selection or manipulation code -- Reselect memoize functions only reruns with new parameters

export function authorsFormattedForDropdown (authors) {
    return authors.map(author =>
    {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
}