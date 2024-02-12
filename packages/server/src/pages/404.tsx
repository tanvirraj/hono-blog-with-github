import { Layout, type SiteData } from "../utils";

export default function TalksPage(props: { site_data: SiteData; }) {
  return (
    <Layout {...props.site_data}>
      <div style="display: flex; flex-direction: column; align-items: center">
      <h1>404</h1> 
      <p>Page Not Found</p>
      <img src="https://i.giphy.com/fzFiKLW1BFsaY.webp" alt="a gif of Sailor Moon crying"/>
      </div>
    </Layout>
  );
};
