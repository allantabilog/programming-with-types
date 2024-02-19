// For the problem described in
// https://livebook.manning.com/book/programming-with-types/chapter-5/87

enum TextProcessingMode {
  Text,
  Marker,
  Code,
}

class TextProcessor {
  private mode: TextProcessingMode = TextProcessingMode.Text;
  private result: string[] = [];
  private codeSample: string[] = [];
}
