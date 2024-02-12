import { html } from "hono/html";

export interface SiteData {
  title: string;
  description: string;
  image: string;
  children?: any;
}

export const Layout = (props: SiteData) => html`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link href="/favicon.png" rel="icon" media="(prefers-color-scheme: light)" />
  <link href="/favicon-dark.png" rel="icon" media="(prefers-color-scheme: dark)" />
  <title>${props.title}</title>
  <meta name="viewport" content="width=device-width" />
  <meta name="description" content="${props.description}">
  <head prefix="og: http://ogp.me/ns#">
  <meta property="og:type" content="article">
  <!-- More elements slow down JSX, but not template literals. -->
  <meta property="og:title" content="${props.title}">
  <meta property="og:image" content="${props.image}">
  <link rel="stylesheet" href="/static/styles.css"/>
  <link rel="stylesheet" href="/static/highlight.css"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
</head>
<body>
  <header>
	  <span>jacob stordahl</span>
	  <nav class="print-hide">
		  <a href="/">home</a>
		  <a href="/writing">writing</a>
      <a href="/systems">systems</a>
      <a href="/readme">Read Me</a>
	  </nav>
  </header>
  <main>${props.children}</main>
  <footer>
    <div id="copyright">
      <span>© ${new Date().getFullYear()} Jacob Stordahl</span>
    </div>
  </footer>
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true });
  </script>
</body>
</html>
`;
