import { useState, useEffect } from "react";

interface SpeechResult {
  text: string;
  error: string | null;
  state?: boolean;
}

const useSpeech = (): [SpeechResult, () => void, () => void] => {
  const [result, setResult] = useState<SpeechResult>({
    text: "",
    error: null,
  });
  const [recognition, setRecognition] = useState<null | SpeechRecognition>(
    null
  );

  useEffect(() => {
    const initRecognition = () => {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRecognition) {
        console.error("SpeechRecognition이 지원되지 않습니다.");
        return null;
      }

      const newRecognition = new SpeechRecognition();
      newRecognition.lang = "ko-KR";
      newRecognition.interimResults = true;
      newRecognition.maxAlternatives = 1;

      return newRecognition;
    };

    const speechRecognition = initRecognition();
    setRecognition(speechRecognition);
  }, []);

  const startListening = () => {
    if (!recognition) {
      setResult({ text: "", error: "SpeechRecognition이 지원되지 않습니다." });
      return;
    }

    recognition.addEventListener("result", handleResult);
    recognition.addEventListener("error", handleError);
    recognition.start();
  };

  const stopListening = () => {
    if (recognition) {
      recognition.removeEventListener("result", handleResult);
      recognition.removeEventListener("error", handleError);
      recognition.stop();
    }
  };

  const handleResult = (event: SpeechRecognitionEvent) => {
    const text = event.results[0][0].transcript;
    setResult({ text, error: null, state: true });
    const timer = setTimeout(() => {
      setResult({ text: "", error: null, state: false });
    }, 3000);

    return () => clearTimeout(timer);
  };

  const handleError = (event: SpeechRecognitionError) => {
    setResult({
      text: "",
      error: `SpeechRecognition error: ${event.error}`,
    });
    stopListening();
  };

  return [result, startListening, stopListening];
};

export default useSpeech;
