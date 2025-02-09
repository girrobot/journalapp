import { MoodProvider } from '../context/MoodContext';

export default function App({ Component, pageProps }) {
  return (
    <MoodProvider>
      <Component {...pageProps} />
    </MoodProvider>
  );
}
