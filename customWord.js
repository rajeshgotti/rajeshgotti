document.addEventListener("mouseup", () => {
  const selection = window.getSelection();
  const text = selection.toString().trim();

  if (!text || text.length < 2) return;

  const container = document.querySelector("main") || document.body;

  // ✅ Remove old highlights
  container.querySelectorAll(".custom-highlight").forEach(el => {
    el.replaceWith(document.createTextNode(el.textContent));
  });

  // Escape special characters
  const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(escaped, "gi");

  // ✅ SIMPLE & WORKING APPROACH
  const elements = container.querySelectorAll("p, li, span, div, td, th");

  elements.forEach(el => {
    if (el.children.length > 0) return; // skip complex nodes

    const content = el.innerHTML;

    if (!regex.test(content)) return;

    el.innerHTML = content.replace(
      regex,
      `<span class="custom-highlight">$&</span>`
    );
  });
});