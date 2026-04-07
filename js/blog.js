function toggleTag(btn) {
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
