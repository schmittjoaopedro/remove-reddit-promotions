(function() {
    'use strict';
    let tagCount = 0;
    function getPromotedParent(el) {
        const parentEl = el.parentElement;
        if (parentEl && parentEl.className.indexOf('Post') > 0) {
            return parentEl;
        } else if (parentEl) {
            return getPromotedParent(parentEl);
        } else {
            return null;
        }
    }
    setInterval(() => {
        let spanTags = Array.prototype.slice.call(document.getElementsByTagName('span'));
        if (spanTags.length !== tagCount) {
            tagCount = spanTags.length;
            spanTags.filter(span => span.innerText.toLowerCase() === 'promoted')
                .forEach(el => {
                const parentEl = getPromotedParent(el);
                if (parentEl) parentEl.style.display = 'none';
            });
        }
    }, 1000);
})();