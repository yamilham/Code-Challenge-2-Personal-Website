interface Paragraph {
  text: string;
}
export default function ParagraphText(props: Paragraph) {
  const { text } = props;
  return (
    <p className="text-pretty font-regular leading-6 text-[18px]">{text}</p>
  );
}
