interface TemplateHeading {
  headingTwo: string;
  description?: string;
}

export default function TitleSection(props: TemplateHeading) {
  const { headingTwo, description } = props;
  return (
    <div className="flex flex-col border-b-2 pb-4 md:pb-6">
      <h2 className="text-2xl md:text-3xl lg:text-6xl font-medium py-2 md:py-3 leading-tight">
        {headingTwo}
      </h2>
      <p className="text-base text-[20px] lg:text-2xl leading-relaxed">
        {description}
      </p>
    </div>
  );
}
