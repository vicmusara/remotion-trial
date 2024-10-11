'use client'

import { Player } from '@remotion/player'
import { MysticalScene } from '.././remotion/components/MysticalScene'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Mystical Scene with Butterflies and Fireflies</h1>
      <Player
        component={MysticalScene}
        durationInFrames={30 * 30} // 30 seconds at 30 fps
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}