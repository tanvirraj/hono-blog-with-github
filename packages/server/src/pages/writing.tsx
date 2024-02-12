import { Layout, type SiteData } from "../utils";

export default function WritingPage(props: { site_data: SiteData }) {
  return (
    <Layout {...props.site_data}>
      <h1>Writing</h1>
      <ul>
        <li>
          <a href="/writing/How-to-Do-Great-Work">How to Do Great Work.md</a>
        </li>
        <li>
          <a href="/writing/How-to-Make-Wealth">How to Make Wealth</a>
        </li>
        <li>
          <a href="/writing/The-Contrarian">The Contrarian</a>
        </li>
        <li>
          <a href="/writing/The-ladders-of-wealth-creation">
            The ladders of wealth creation
          </a>
        </li>
        <li>
          <a href="/writing/nisapur">নিশাপুরের চিঠি</a>
        </li>
        <li>
          <a href="/writing/adams-heroku-values">Adams heroku values</a>
        </li>
      </ul>
    </Layout>
  );
}
