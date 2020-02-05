// Lightbox Functionality

lightbox.option({
    'resizeDuration': 700,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'fadeDuration': 600
})

//Search Functionality

const $search = $('#search');
const $links = $('a');

$search.keyup(function() {
    const $searchValue = $search.val().toLowerCase();

    //loop through a link tags
    $links.each(function() {
        let $captions = $(this).attr('data-title').toLowerCase();
        if ($captions.indexOf($searchValue) > -1) {
            $(this).parent().show();
        } else {
            $(this).parent().hide();
        }
    })
})