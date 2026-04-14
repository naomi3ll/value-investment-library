---
title: "2000年Wesco金融公司股东会问答"
description: "2000年查理·芒格在Wesco金融公司股东会的问答记录"
template: splash
---

<a href="/value-investment-library/munger/" style="display: inline-block; margin-bottom: 1rem; color: var(--sl-color-accent);">← 返回芒格专区</a>

<div id="letter-content">加载中...</div>

<script>
const contentEl = document.getElementById('letter-content');
fetch('/value-investment-library/external/munger/wesco/2000-Wesco-问答.html')
  .then(r => r.text())
  .then(html => {
    let body = html.match(/<body>([\s\S]*?)<\/body>/)?.[1] || html;
    const articleMatch = body.match(/<article[^>]*>([\s\S]*?)<\/article>/);
    body = articleMatch ? articleMatch[1] : body;
    body = body.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="" target="_blank"></a>');
    const paragraphs = body.split('</p><p>');
    let result = '';
    paragraphs.forEach(p => {
      if (p.match(/Q\s*\d|Q:|问题\s*\d|提问/) && !p.match(/^Munger/)) {
        result += '<p class="question">' + p + '</p>';
      } else if (p.match(/^Munger|Munger:|\*\*Munger/)) {
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
  color: #e0e0e0;
  line-height: 1.85;
  font-size: 16px;
  padding: 1rem;
}
#letter-content h1, #letter-content h2, #letter-content h3 {
  color: var(--sl-color-white);
  font-size: 1.8rem;
  margin: 1.5rem 0 0.75rem;
  border-bottom: 1px solid var(--sl-color-gray-5);
  padding-bottom: 0.5rem;
}
#letter-content p {
  margin: 0.75rem 0;
  color: #d0d0d0;
}
#letter-content p.question {
  color: #66b3ff;
  font-weight: 600;
}
#letter-content p.answer {
  color: #d0d0d0;
}
#letter-content strong {
  color: inherit;
}
#letter-content a {
  color: #66b3ff;
  text-decoration: underline;
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
:root[data-theme='light'] #letter-content a {
  color: #0066cc;
}
</style>
