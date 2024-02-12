import { Layout, type SiteData } from "../utils";

export default function SystemsPage(props: { site_data: SiteData; }) {
  return (
    <Layout {...props.site_data}>
      <h1>Systems</h1> 
      <p>A collection of case studies focused on system design work I've contributed to.</p>
      <ul>
        <li><a href="/systems/error-monitoring">In-House Error Montoring</a></li>
      </ul>
    </Layout>
  );
};
