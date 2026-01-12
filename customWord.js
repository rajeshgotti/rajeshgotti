document.addEventListener("mouseup", () => {
  const selected = window.getSelection().toString().trim();

  // ignore short / empty selections
  if (!selected || selected.length < 2) return;

  // remove previous highlights
  document.querySelectorAll(".custom-highlight").forEach(el => {
    el.replaceWith(document.createTextNode(el.innerText));
  });

  const regex = new RegExp(selected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");

  const walker = document.createTreeWalker(
    document.querySelector("main") || document.body,
    NodeFilter.SHOW_TEXT
  );

  let node;
  while ((node = walker.nextNode())) {
    if (!node.nodeValue.match(regex)) continue;

    const wrapper = document.createElement("span");
    wrapper.innerHTML = node.nodeValue.replace(
      regex,
      m => `<span class="custom-highlight">${m}</span>`
    );
    node.parentNode.replaceChild(wrapper, node);
  }
});
