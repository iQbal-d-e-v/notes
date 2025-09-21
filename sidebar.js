document.addEventListener('DOMContentLoaded', () => {
  const scrollbar = document.getElementById('vScrollbar');
  if (!scrollbar) return;

  const sections = document.querySelectorAll('section');
  const colors = ['#f1c40f','#e67e22','#e74c3c','#9b59b6','#3498db','#1abc9c','#2ecc71'];

  sections.forEach((sec, index) => {
    const block = document.createElement('div');
    block.className = 'section-block';
    block.style.backgroundColor = colors[index % colors.length];
    block.style.padding = '5px';
    block.style.marginBottom = '5px';

    // Main topic (h2 only)
    const topic = sec.querySelector('h2') ? sec.querySelector('h2').innerText : sec.id;
    const topicDiv = document.createElement('div');
    topicDiv.textContent = topic;
    topicDiv.style.fontWeight = 'bold';
    block.appendChild(topicDiv);

    // Click to scroll to section
    block.addEventListener('click', () => {
      sec.scrollIntoView({ behavior: 'smooth' });
    });

    scrollbar.appendChild(block);
  });
});
