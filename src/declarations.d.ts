declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }

  const SpeechRecognition: {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
  };

  interface SpeechRecognition extends EventTarget {
    lang: string;
    interimResults: boolean;
    maxAlternatives: number;
    start(): void;
    stop(): void;
    abort(): void;
    addEventListener<K extends keyof SpeechRecognitionEventMap>(
      type: K,
      listener: (
        this: SpeechRecognition,
        ev: SpeechRecognitionEventMap[K]
      ) => unknown,
      useCapture?: boolean
    ): void;
    removeEventListener<K extends keyof SpeechRecognitionEventMap>(
      type: K,
      listener: (
        this: SpeechRecognition,
        ev: SpeechRecognitionEventMap[K]
      ) => unknown,
      useCapture?: boolean
    ): void;
  }

  interface SpeechRecognitionEventMap {
    audiostart: Event;
    soundstart: Event;
    speechstart: Event;
    speechend: Event;
    soundend: Event;
    audioend: Event;
    result: SpeechRecognitionEvent;
    nomatch: SpeechRecognitionEvent;
    error: SpeechRecognitionError;
    start: Event;
    end: Event;
  }

  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  }

  interface SpeechRecognitionResult {
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
    readonly isFinal: boolean;
  }

  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }

  interface SpeechRecognitionError extends Event {
    readonly error: string;
    readonly message: string;
  }
}

export {};
