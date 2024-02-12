import { Hono } from "hono";
import { cache } from "hono/cache";
import { serveStatic } from "hono/cloudflare-workers";
import ArticlePage from "./pages/article";
import HomePage from "./pages/home";
import WritingPage from "./pages/writing";
import ResumePage from "./pages/resume";
import SystemsPage from "./pages/systems";
import TalksPage from "./pages/talks";
import UsesPage from "./pages/uses";
import ReadMePage from "./pages/readme";
import NotFoundPage from "./pages/404";
import {
  build_article_page_data,
  DynamicPageConfig,
  parse_description,
  parse_frontmatter,
  remove_frontmatter,
} from "./data";

export type Bindings = {
  DB_ANALYTICS: D1Database;
  GH_TOKEN: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.notFound((c) => {
  const props = {
    site_data: {
      title: "404 | Jacob Stordahl",
      description: "Not Found",
      image: "https://example.com/image.png",
    },
  };
  return c.html(<NotFoundPage {...props} />);
});

app.get("/static/*", serveStatic({ root: "./" }));
app.get("/favicon.png", serveStatic({ path: "./favicon.png" }));
app.get("/favicon-dark.png", serveStatic({ path: "./favicon-dark.png" }));
app.get("/install.sh", serveStatic({ path: "./install.sh" }));

app.get("/", async (c) => {
  const props = {
    site_data: {
      title: "Jacob Stordahl",
      description: "Software Engineer working in e-commerce & open source",
      image: "https://example.com/image.png",
    },
  };

  return c.html(<HomePage {...props} />);
});

app.get("/resume", async (c) => {
  const props = {
    site_data: {
      title: "Resume | Jacob Stordahl",
      description: "My resume",
      image: "https://example.com/image.png",
    },
  };

  return c.html(<ResumePage {...props} />);
});

app.get("/systems", async (c) => {
  const props = {
    site_data: {
      title: "Systems | Jacob Stordahl",
      description: "A collection of systems I've designed",
      image: "https://example.com/image.png",
    },
  };

  return c.html(<SystemsPage {...props} />);
});

app.get("/systems/:slug", async (c) => {
  const pageConfig: DynamicPageConfig = {
    owner: "stordahl",
    repo: "stordahldotdev",
    folderPath: "packages/content/systems",
  };
  const raw = await build_article_page_data(
    c.env.GH_TOKEN,
    c.req.param("slug"),
    pageConfig
  );
  const metadata = parse_frontmatter(raw!);
  const description = parse_description(raw!);

  const props = {
    site_data: {
      title: metadata.title,
      description,
      image: "https://example.com/image.png",
    },
    metadata,
    raw_markdown: remove_frontmatter(raw!),
  };

  return c.html(<ArticlePage {...props} />);
});

app.get("/talks", async (c) => {
  const props = {
    site_data: {
      title: "Talks | Jacob Stordahl",
      description: "A list of my talks and podcasts",
      image: "https://example.com/image.png",
    },
  };

  return c.html(<TalksPage {...props} />);
});

app.get("/writing", async (c) => {
  const props = {
    site_data: {
      title: "Writing | Jacob Stordahl",
      description: "A collection of writing on JavaScript and the web",
      image: "https://example.com/image.png",
    },
  };

  return c.html(<WritingPage {...props} />);
});

app.get("/writing/:slug", async (c) => {
  const raw = await build_article_page_data(
    c.env.GH_TOKEN,
    c.req.param("slug")
  );
  console.log(raw);
  const metadata = parse_frontmatter(raw!);
  const description = parse_description(raw!);

  const props = {
    site_data: {
      title: metadata.title,
      description,
      image: "https://example.com/image.png",
    },
    metadata,
    raw_markdown: remove_frontmatter(raw!),
  };

  return c.html(<ArticlePage {...props} />);
});

app.get("/uses", async (c) => {
  const props = {
    site_data: {
      title: "Uses | Jacob Stordahl",
      description: "A list of the things I use to get my work done",
      image: "https://example.com/image.png",
    },
  };

  return c.html(<UsesPage {...props} />);
});

app.get("/readme", async (c) => {
  const props = {
    site_data: {
      title: "README | tanvir",
      description: "A list of the things I use to get my work done",
      image: "https://example.com/image.png",
    },
  };

  return c.html(<ReadMePage {...props} />);
});

export default app;
