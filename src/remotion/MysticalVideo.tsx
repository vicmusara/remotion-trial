import { Composition } from 'remotion';
import { MysticalScene } from './components/MysticalScene';

export const MysticalVideo: React.FC = () => {
  return (
    <Composition
      id="MysticalScene"
      component={MysticalScene}
      durationInFrames={30 * 30} // 30 seconds at 30 fps
      fps={30}
      width={1920}
      height={1080}
    />
  );
};