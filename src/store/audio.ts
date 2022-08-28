import create from 'zustand'

export type AudioState = 'playing' | 'paused' | 'stopped'

interface IAudioStore {
  globalAudioState: AudioState,
  setGlobalAudioState: (globalAudioState: AudioState) => void
  currentAudioFile?: string
  setCurrentAudioFile: (file: string) => void
}

export const useAudioStore = create<IAudioStore>((set) => ({
  globalAudioState: 'paused',
  setGlobalAudioState: (globalAudioState) => set({ globalAudioState }),
  setCurrentAudioFile: (incomingAudioFile) => set({ currentAudioFile: incomingAudioFile })
}))