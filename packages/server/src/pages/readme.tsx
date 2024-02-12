import { Layout, type SiteData } from "../utils";

export default function UsesPage(props: { site_data: SiteData }) {
  return (
    <Layout {...props.site_data}>
      <section>
        <ul class="list">
          <li>Product Engineer from Bangladesh</li>
        </ul>
      </section>
    </Layout>
  );
}
