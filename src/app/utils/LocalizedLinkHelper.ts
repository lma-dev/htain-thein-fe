import Link from "next/link";

function LocalizedLink({ href, router, ...rest }) {
  const { locale } = router;

  return <Link href={`/${locale}${href}`} {...rest} />;
}

export default LocalizedLink;
