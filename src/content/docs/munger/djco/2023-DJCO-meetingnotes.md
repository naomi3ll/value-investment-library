---
title: "2023年Daily Journal股东会问答"
description: "2023年查理·芒格在Daily Journal股东会的问答记录"
template: splash
---

<a href="/value-investment-library/munger/" style="display: inline-block; margin-bottom: 1rem; color: var(--sl-color-accent);">← 返回芒格专区</a>

<div id="letter-content">加载中...</div>

<script>
const contentEl = document.getElementById('letter-content');
fetch('/value-investment-library/external/munger/djco/2023-DJCO-问答.html')
  .then(r => r.text())
  .then(html => {
    let body = html.match(/<body>([\s\S]*?)<\/body>/)?.[1] || html;
    const articleMatch = body.match(/<article[^>]*>([\s\S]*?)<\/article>/);
    body = articleMatch ? articleMatch[1] : body;
    // Convert markdown links to HTML links: [text](url) -> <a href="url">text</a>
    body = body.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    // Split into paragraphs and classify each
    const paragraphs = body.split('</p><p>');
    let result = '';
    paragraphs.forEach(p => {
      if (p.match(/Q\s*\d|问题\s*d|贝琪/) && !p.match(/^芒格/)) {
        result += '<p class="question">' + p + '</p>';
      } else if (p.match(/^芒格|芒格：|贝琪·奎克/)) {
        result += '<p class="answer">' + p + '</p>';
      } else {
        result += '<p>' + p + '</p>';
      }
    });
    contentEl.innerHTML = result;
  })
  .catch(() => contentEl.innerHTML = '<p>加载失败</p>');
</script>

<style>
#letter-content {
  color: #1a1a1a;
  line-height: 1.85;
  font-size: 16px;
  padding: 1rem;
}
#letter-content p {
  margin: 0.5rem 0;
  color: #1a1a1a;
}
#letter-content p.question {
  color: #0066cc;
  font-weight: 600;
}
#letter-content p.answer {
  color: #1a1a1a;
}
#letter-content h1, #letter-content h2, #letter-content h3 {
  color: var(--sl-color-white);
  font-size: 1.8rem;
  margin: 1.5rem 0 0.75rem;
  border-bottom: 1px solid var(--sl-color-gray-5);
  padding-bottom: 0.5rem;
}
#letter-content strong {
  color: inherit;
}
#letter-content a {
  color: #0066cc;
  text-decoration: underline;
}
#letter-content a:hover {
  color: #004499;
}
:root[data-theme='dark'] #letter-content {
  color: #e0e0e0;
}
:root[data-theme='dark'] #letter-content p,
:root[data-theme='dark'] #letter-content p.answer {
  color: #d0d0d0;
}
:root[data-theme='dark'] #letter-content p.question {
  color: #66b3ff;
}
:root[data-theme='light'] #letter-content {
  color: #1a1a1a;
}
:root[data-theme='light'] #letter-content p,
:root[data-theme='light'] #letter-content p.answer {
  color: #1a1a1a;
}
:root[data-theme='light'] #letter-content p.question {
  color: #0066cc;
}
</style>