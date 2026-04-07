// Font selection - using Lora because the irony is too good to pass up
// Runner-ups if the in-joke gets old: Roboto Mono (techy vibe), Public Sans (clean & readable)
(function() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  var style = document.createElement('style');
  style.textContent = 'body { font-family: "Lora", serif; }';
  document.head.appendChild(style);
})();

(function() {
  var params = new URLSearchParams(window.location.search);
  var tagParam = params.get('tag');
  if (tagParam) {
    document.querySelectorAll('.tag-toggle').forEach(function(btn) {
      if (btn.getAttribute('data-tag') === tagParam) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    filterPosts();
  }
})();

function toggleTag(btn) {
  if (btn.classList.contains('active') &&
      document.querySelectorAll('.tag-toggle.active').length <= 1) {
    return;
  }
  btn.classList.toggle('active');
  filterPosts();
}

function filterPosts() {
  var activeTags = [];
  document.querySelectorAll('.tag-toggle.active').forEach(function(b) {
    activeTags.push(b.getAttribute('data-tag'));
  });
  document.querySelectorAll('.post-list li').forEach(function(li) {
    var postTags = li.getAttribute('data-tags').split(',');
    var match = activeTags.length === 0 || postTags.some(function(t) {
      return activeTags.indexOf(t) !== -1;
    });
    li.style.display = match ? 'block' : 'none';
  });
}
