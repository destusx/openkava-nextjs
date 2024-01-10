import DOMPurify from 'isomorphic-dompurify';

function createMarkup(html) {
    return {
        __html: DOMPurify.sanitize(html),
    };
}

export default createMarkup;
