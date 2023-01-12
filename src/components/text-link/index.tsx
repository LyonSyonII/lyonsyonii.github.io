export type TextLinkProps = {
  children: React.ReactNode;
  link: string;
  className?: string;
};
export function TextLink({ children, link, className }: TextLinkProps) {
  return (
    <h3>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`font-bold text-blue-600 underline decoration-2 ${className}`}
        >
          {children}
        </a>
      ) : (
        <div className={className}>{children}</div>
      )}
    </h3>
  );
}
