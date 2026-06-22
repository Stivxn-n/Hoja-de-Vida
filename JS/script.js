function loadPhoto(e) {
  var file = e.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(ev) {
    var img = document.getElementById('avatarImg');
    var ph = document.getElementById('avatarPh');
    img.src = ev.target.result;
    img.style.display = 'block';
    ph.style.display = 'none';
  };
  reader.readAsDataURL(file);
}
