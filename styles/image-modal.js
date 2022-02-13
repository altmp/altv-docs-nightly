$(document).ready(function() {
  enableImagePreview();
});

function enableImagePreview() {
  $("img[data-toggle=\"modal\"]").click(function(ev) {
    const el = $(ev.target);
    const modalTitleEl = $("#modal .modal-header .modal-title");
    const modalBodyEl = $("#modal .modal-body");
    modalTitleEl.text($(ev.target).attr('title'));
    modalBodyEl.html(`<img src="${el.attr('data-src')}" alt="${el.attr('alt')}"/>`);
    $("#modal").modal();
  });
}
