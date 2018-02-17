const $ = id => document.getElementById(id);

function main() {
  $("old-content").style.display = "none";
  let nc = $("new-content");
  nc.style.display = "block";
  nc.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor accumsan tincidunt. Fusce odio dui, ultricies sit amet ipsum a, ultrices ultrices ligula. In hac habitasse platea dictumst. Aliquam ullamcorper tempor ligula, in feugiat elit porta sed. Cras quis tincidunt lorem, vel pulvinar diam. Sed justo nulla, sodales accumsan rutrum vel, dictum in libero. Morbi pulvinar sapien nulla, eu mattis arcu mollis in. In vehicula lectus mi, sit amet rutrum dui tempus at.";
}

window.setTimeout(main, 30);
