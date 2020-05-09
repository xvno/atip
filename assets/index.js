document.onload = function () {
    const links = document.querySelector('#links');
    const iframeWrapper = document.querySelector('#iframeWrapper');
    const previewer = document.querySelector('#previewer');

    function resizePreviewer() {
        previewer.width = iframeWrapper.clientWidth;
        previewer.height = iframeWrapper.clientHeight;
    }

    links.addEventListener(
        'click',
        (ev) => {
            resizePreviewer();
            let { target } = ev;
            previewer.src = target?.href || 'about:blank';
            ev.preventDefault();
            ev.stopPropagation();
        },
        true
    );
};
