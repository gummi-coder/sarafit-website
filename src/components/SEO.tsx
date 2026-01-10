import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO = ({
  title = "Sarafit - Fjarþjálfun sem hentar þínu lífi",
  description = "Tónum líkaman og byggjum upp sjálfstraust í ræktinni. Engin diet og engar skyndilausnir - bara árangur sem endist til lengri tíma.",
  image = "https://sarafit.is/DSC02083.JPG",
  url = "https://sarafit.is",
  type = "website",
  keywords = "fjarþjálfun, þjálfun, fitness, æfingar, næring, SARAFIT, Guðrún Sara, tilbúin prógröm, fitubrennsla, styrkur",
  noindex = false,
  structuredData,
}: SEOProps) => {
  const fullTitle = title.includes("Sarafit") ? title : `${title} | Sarafit`;
  const fullUrl = url.startsWith("http") ? url : `https://sarafit.is${url}`;
  const fullImage = image.startsWith("http") ? image : `https://sarafit.is${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="is" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Sarafit" />
      <meta property="og:locale" content="is_IS" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

