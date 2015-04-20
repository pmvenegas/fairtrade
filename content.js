fillBlanks();
removeDuplicates();

function updateImage(target, page) {
  $.ajax({
    url: page,
    dataType: 'html',
    success: function(data) {
      target.attr('src', $(data).find('img#mainImage').attr('src'));
      //target.attr('width', '160px');
      target.attr('height', '120px');
    },
  });
}

function fillBlanks() {
  $('img[src="/images/NewSearchCards/LVIcons/hasPhoto_160x120.png"]').each(function() {
    updateImage($(this), $(this).parent().attr('href'));
  });
}

function removeDuplicates() {
  var items = [];

  // TODO: improve duplicate heuristics
  $('li.listingCard').each(function() {
    item = $(this).find('div.listingTitle > a').first().text();
    if (items.indexOf(item) != -1) {
      console.log(item + ' is a duplicate.');
      $(this).children().remove();
      $(this).append('[Duplicate removed - "' + item + '"]');
    } else {
      items.push(item);
      console.log(item + ' added.');
    }
  });
}
