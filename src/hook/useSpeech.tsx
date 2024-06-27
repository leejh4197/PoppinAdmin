import { useState, useEffect } from "react";

const useSpeech = () => {
  const [result, setResult] = useState<any>({
    text: "",
    error: null,
  });
  const [recognition, setRecognition] = useState<any>(null);

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
      // 실시간으로 텍트스 처리할건지 인식이 끝나고 결과 값만 받을지
      newRecognition.interimResults = true;
      // 가장 신뢰 가능한 텍스트 1개만 반환
      // ex)3으로 했다면 비슷한 텍스트 3개반환
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

  const handleResult = (event: any) => {
    const text = event.results[0][0].transcript;
    setResult({ text, error: null, state: true });
    const timer = setTimeout(() => {
      setResult({ text: "", error: null, state: false });
    }, 3000);

    return () => clearTimeout(timer);
  };

  const handleError = (event: any) => {
    setResult({
      text: "",
      error: `SpeechRecognition error: ${event.error}`,
    });
    stopListening();
  };

  return [result, startListening, stopListening];
};

export default useSpeech;
