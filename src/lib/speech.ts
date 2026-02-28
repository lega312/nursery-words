export function speak(text: string) {
  if (!window.speechSynthesis) return

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-US'
  utterance.rate = 0.8
  utterance.pitch = 1.1

  const voices = window.speechSynthesis.getVoices()
  const englishVoice = voices.find(v => v.lang.startsWith('en'))
  if (englishVoice) {
    utterance.voice = englishVoice
  }

  window.speechSynthesis.speak(utterance)
}
