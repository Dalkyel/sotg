const linkColors = {
  cat: '#6a5a30',
  arc: '#4a4a3a',
  rel: '#5a4a70',
  magic: '#2a7a7a',
  conflict: '#7a2a2a',
  goal: '#7a6a20',
  event: '#6a4a20',
  lore: '#3a5a3a',
  history: '#5a3a5a',
  geo: '#2a4a2a',
  trama: '#7a5a20',
};

// ═══════════════════════════════════════════════════════
// D3 SETUP
// ═══════════════════════════════════════════════════════
const svg = d3.select('#graph');
const container = document.getElementById('graph-container');
const width = () => container.clientWidth;
const height = () => container.clientHeight;

const g = svg.append('g');

// Zoom
const zoom = d3.zoom()
  .scaleExtent([0.15, 3])
  .on('zoom', e => g.attr('transform', e.transform));
svg.call(zoom);

// Arrow markers
const defs = svg.append('defs');
Object.entries(linkColors).forEach(([type, color]) => {
  defs.append('marker')
    .attr('id', `arrow-${type}`)
    .attr('viewBox', '0 -4 8 8')
    .attr('refX', 18)
    .attr('refY', 0)
    .attr('markerWidth', 4)
    .attr('markerHeight', 4)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,-4L8,0L0,4')
    .attr('fill', color)
    .attr('opacity', 0.6);
});

// ── Force simulation ─────────────────────────────────
const nodeMap = {};
nodes.forEach(n => {
  const g = GROUPS[n.group];
  n.r = g?.r || 12;
  n.color = g?.color || '#3a3a3a';
  n.stroke = g?.stroke || '#8a8a8a';
  nodeMap[n.id] = n;
});

const simulation = d3.forceSimulation(nodes)
  .force('link', d3.forceLink(links).id(d => d.id).distance(d => {
    if (d.type === 'cat') return 160;
    if (d.type === 'arc') return 120;
    return 95;
  }).strength(d => d.type === 'cat' ? 0.8 : 0.5))
  .force('charge', d3.forceManyBody().strength(d => {
    if (d.group === 'CENTER') return -800;
    if (d.group === 'CAT') return -500;
    return -250;
  }))
  .force('center', d3.forceCenter(width() / 2, height() / 2))
  .force('collision', d3.forceCollide(d => d.r + 18))
  .alphaDecay(0.02)
  .velocityDecay(0.3);

// ── Draw links ─────────────────────────────────────────
const linkSel = g.append('g').attr('class', 'links')
  .selectAll('line')
  .data(links)
  .join('line')
  .attr('class', 'link')
  .attr('stroke', d => linkColors[d.type] || '#4a4a3a')
  .attr('marker-end', d => `url(#arrow-${d.type})`);

// ── Draw nodes ──────────────────────────────────────────
const nodeSel = g.append('g').attr('class', 'nodes')
  .selectAll('g')
  .data(nodes)
  .join('g')
  .attr('class', d => `node ${d.group === 'CENTER' ? 'center-node' : ''} ${d.group === 'CAT' ? 'category-node' : ''}`)
  .call(d3.drag()
    .on('start', (e, d) => {
      if (!e.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x; d.fy = d.y;
    })
    .on('drag', (e, d) => { d.fx = e.x; d.fy = e.y; })
    .on('end', (e, d) => {
      if (!e.active) simulation.alphaTarget(0);
      d.fx = null; d.fy = null;
    })
  );

nodeSel.append('circle')
  .attr('r', d => d.r)
  .attr('fill', d => d.color)
  .attr('stroke', d => d.stroke)
  .attr('stroke-width', 1.5);

// Multi-line labels with dynamic sizing
nodeSel.each(function (d) {
  const el = d3.select(this);
  const r = d.r;
  const fontSize = r * 0.35;
  const lineH = fontSize * 1.1;
  const maxWidth = r * 1.7;

  const words = d.label.split(' ');
  let lines = [];
  let currentLine = [];

  const isTitled = d.group === 'CAT' || d.group === 'CENTER';
  const fontFamily = isTitled ? "'Cinzel', serif" : "'Crimson Pro', serif";

  const tempText = el.append('text')
    .attr('font-size', fontSize)
    .attr('font-family', fontFamily)
    .style('visibility', 'hidden');

  words.forEach(word => {
    currentLine.push(word);
    tempText.text(currentLine.join(' '));
    if (tempText.node().getComputedTextLength() > maxWidth && currentLine.length > 1) {
      currentLine.pop();
      lines.push(currentLine.join(' '));
      currentLine = [word];
    }
  });
  if (currentLine.length > 0) lines.push(currentLine.join(' '));
  tempText.remove();

  const totalH = (lines.length - 1) * lineH;
  lines.forEach((line, i) => {
    el.append('text')
      .attr('y', i * lineH - totalH / 2)
      .attr('font-size', fontSize)
      .attr('font-family', fontFamily)
      .attr('fill', d.group === 'CENTER' ? '#e8b96a' : isTitled ? '#e8d8b0' : '#d8c890')
      .attr('font-weight', isTitled ? '600' : '400')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('pointer-events', 'none')
      .attr('user-select', 'none')
      .text(line);
  });
});

// ── Tick ───────────────────────────────────────────────
simulation.on('tick', () => {
  linkSel
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);
  nodeSel.attr('transform', d => `translate(${d.x},${d.y})`);
});

// ── Tooltip ────────────────────────────────────────────
const tooltip = document.getElementById('tooltip');
const ttName = document.getElementById('tt-name');
const ttDesc = document.getElementById('tt-desc');

if (!('ontouchstart' in window)) {
  nodeSel
    .on('mouseenter', (e, d) => {
      ttName.textContent = d.label.replace(' ', ' ');
      ttDesc.textContent = d.type;
      tooltip.classList.add('visible');
    })
    .on('mousemove', e => {
      tooltip.style.left = (e.clientX + 14) + 'px';
      tooltip.style.top = (e.clientY - 8) + 'px';
    })
    .on('mouseleave', () => tooltip.classList.remove('visible'));
}

// ── Panel ──────────────────────────────────────────────
const panel = document.getElementById('detail-panel');
const pType = document.getElementById('p-type');
const pName = document.getElementById('p-name');
const pDesc = document.getElementById('p-desc');
const pConns = document.getElementById('p-connections');
const pStar = document.getElementById('p-star');
let selectedNode = null;

function showPanel(d) {
  pType.textContent = d.type;
  pName.textContent = d.label.replace(' ', ' ');
  pDesc.textContent = d.desc;
  pStar.innerHTML = d.star ? `<div class="star-note">${d.star}</div>` : '';

  // Find connections
  const conns = links
    .filter(l => l.source.id === d.id || l.target.id === d.id)
    .map(l => {
      const fromSrc = l.source.id === d.id;
      return { node: fromSrc ? l.target : l.source, label: l.label, dir: fromSrc ? '→' : '←' };
    });

  pConns.innerHTML = '';
  conns.forEach(c => {
    const div = document.createElement('div');
    div.className = 'conn-item';
    div.style.borderLeftColor = c.node.stroke;
    div.innerHTML = `
      <div class="conn-dot" style="background:${c.node.color};border-color:${c.node.stroke}"></div>
      <div>
        <div class="conn-name">${c.node.label.replace(' ', ' ')}</div>
        ${c.label ? `<div class="conn-rel">${c.dir} ${c.label}</div>` : ''}
      </div>`;
    div.addEventListener('click', () => {
      if (c.node) selectNode(c.node);
    });
    pConns.appendChild(div);
  });

  panel.classList.remove('hidden');
}

function selectNode(d) {
  selectedNode = d;
  showPanel(d);

  // Highlight connected
  const connectedIds = new Set([d.id]);
  links.forEach(l => {
    if (l.source.id === d.id) connectedIds.add(l.target.id);
    if (l.target.id === d.id) connectedIds.add(l.source.id);
  });

  nodeSel
    .classed('selected', nd => nd.id === d.id)
    .classed('faded', nd => !connectedIds.has(nd.id));

  linkSel
    .classed('highlighted', l => l.source.id === d.id || l.target.id === d.id)
    .classed('faded', l => l.source.id !== d.id && l.target.id !== d.id);
}

function clearSelection() {
  selectedNode = null;
  nodeSel.classed('selected faded', false);
  linkSel.classed('highlighted faded', false);
  panel.classList.add('hidden');
}

nodeSel.on('click', (e, d) => {
  e.stopPropagation();
  if (selectedNode && selectedNode.id === d.id) clearSelection();
  else selectNode(d);
});

svg.on('click', clearSelection);
document.getElementById('panel-close').addEventListener('click', clearSelection);

// ── Zoom controls ─────────────────────────────────────
document.getElementById('btn-zoom-in').addEventListener('click', () => {
  svg.transition().duration(300).call(zoom.scaleBy, 1.4);
});
document.getElementById('btn-zoom-out').addEventListener('click', () => {
  svg.transition().duration(300).call(zoom.scaleBy, 0.7);
});
function resetZoom(animate) {
  const t = d3.zoomIdentity.translate(width() / 2, height() / 2).scale(0.75).translate(-width() / 2, -height() / 2);
  (animate ? svg.transition().duration(500) : svg).call(zoom.transform, t);
}

document.getElementById('btn-reset').addEventListener('click', () => resetZoom(true));

// ── Search functionality ──────────────────────────────
const searchInput = document.getElementById('search-input');
if (!searchInput) {
  console.error('Search input not found');
} else {
  let searchTimeout;
  const isMobile = 'ontouchstart' in window;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        nodeSel.classed('selected faded', false);
        linkSel.classed('highlighted faded', false);
        panel.classList.add('hidden');
        return;
      }
      const matchIds = new Set();
      nodes.forEach(n => {
        if (n.id.toLowerCase().includes(query) || n.label.toLowerCase().includes(query)) {
          matchIds.add(n.id);
        }
      });
      if (matchIds.size) {
        nodeSel
          .classed('selected', n => matchIds.has(n.id))
          .classed('faded', n => !matchIds.has(n.id));
        linkSel.classed('highlighted', false).classed('faded', false);
      } else {
        nodeSel.classed('selected', false).classed('faded', true);
        linkSel.classed('highlighted', false).classed('faded', true);
      }
    }, isMobile ? 300 : 150);
  });
  if (isMobile) {
    searchInput.addEventListener('focus', () => searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  }
}

// Initial zoom
setTimeout(() => resetZoom(false), 100);

// Resize
window.addEventListener('resize', () => {
  simulation.force('center', d3.forceCenter(width() / 2, height() / 2));
  simulation.alpha(0.1).restart();
});

// ── Summary Panel ─────────────────────────────────────
const summaryPanel = document.getElementById('summary-panel');
const summaryContent = document.getElementById('summary-content');
const btnSummaries = document.getElementById('btn-summaries');
const summaryClose = document.getElementById('summary-close');

function loadSummaries() {
  summaryContent.innerHTML = chapterSummaries.map(ch => `
    <div class="chapter-item" data-chapter="${ch.chapter}">
      <div class="chapter-title">
        <span>${ch.title}</span>
        <span class="chapter-toggle">▼</span>
      </div>
      <div class="chapter-text collapsed">${ch.summary}</div>
    </div>
  `).join('');
  
  // Add click handlers for toggling
  document.querySelectorAll('.chapter-item').forEach(item => {
    const title = item.querySelector('.chapter-title');
    const text = item.querySelector('.chapter-text');
    const toggle = item.querySelector('.chapter-toggle');
    
    title.addEventListener('click', () => {
      text.classList.toggle('collapsed');
      toggle.classList.toggle('expanded');
    });
  });
}

function toggleSummaryPanel() {
  summaryPanel.classList.toggle('visible');
  if (summaryPanel.classList.contains('visible') && summaryContent.innerHTML === '') {
    loadSummaries();
  }
}

btnSummaries.addEventListener('click', toggleSummaryPanel);
summaryClose.addEventListener('click', () => summaryPanel.classList.remove('visible'));
