interface TextProps extends React.HTMLAttributes<JSX.Element> {
  /**
   * This is the i18n key to check for in the tranlsation files.
   */
  text: string;
  /**
   * This acccepts the element type to use for the render,
   * e.g, in case of paragraph we need a p, in case of a heading, we need and h2/3/4..
   * @default span
   */
  as?: React.ElementType;

  value?: string;
}

/**
 * Responsive text that respects HTML semantics and SEO, this utility component will check if the passed i18n key has a shorter
 * version in the translation files, and replaces it with the shorter version on smaller devices.
 */
const Text = ({
  text,
  className,
  as: Tag = "span",
  children,

  ...props
}: TextProps) => (
  // const { t } = useTranslation();

  <Tag className={`${className || ""}`} {...props}>
    {text}
    {/* <span className="hidden sm:inline-block">{t(text)}</span> */}
    {/* <span className="sm:hidden">
          {i18n.exists(`${text}.short`) ? t(`${text}.short`) : t(text)}
        </span> */}
    {children}
  </Tag>
);
export default Text;
