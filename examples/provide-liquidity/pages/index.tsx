import NoSSR from 'react-no-ssr';
import { WalletSection, ProvideLiquidity, Layout } from '@/components';

export default function Home() {
  return (
    <Layout>
      <WalletSection />
      {/* TODO fix type error */}
      {/* Type error: This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided. */}
      {/* @ts-ignore */}
      <NoSSR>
        <ProvideLiquidity />
      </NoSSR>
    </Layout>
  );
}
