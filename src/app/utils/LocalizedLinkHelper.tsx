import Link from "next/link";

interface LocalizedLinkProps {
  href: string;
  router: any;
}

function LocalizedLink({ href, router, ...rest }: LocalizedLinkProps) {
  const { locale } = router;

  return <Link href={`/${locale}${href}`} {...rest} />;
}

export default LocalizedLink;
