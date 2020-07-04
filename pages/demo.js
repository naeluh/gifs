import Page from '../components/landing/page';
import ImgBk from '../components/landing/image-background';

export default function Demo({ gifJson }) {
  return (
    <Page title="Image Tester" description="Image Tester">
      <main>
        <ImgBk amount={100} gifs={gifJson} />
      </main>
    </Page>
  );
}

Demo.getInitialProps = async ({ req, res }) => {
  const { origin } = absoluteUrl(req, 'localhost:3000');
  const gifRes = await fetch(`${origin}/api/giphy`);
  const gifJson = await gifRes.json();
  return { gifJson };
};
