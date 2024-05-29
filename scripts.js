document.addEventListener('DOMContentLoaded', function() {
    var downloadLinks = document.querySelectorAll('.download-link');

    downloadLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var downloadLink = document.createElement('a');
            downloadLink.href = this.href;
            downloadLink.download = this.getAttribute('download');
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    });
});