/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description, title, children }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						social {
							linkedin
						}
					}
				}
			}
		`,
	);

	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;

	return (
		<>
			<title>{defaultTitle + ' — A blog by Kyle Kwon'}</title>
			<meta name="description" content={metaDescription} />
			<meta property="og:title" content={defaultTitle} />
			<meta property="og:description" content={metaDescription} />
			<meta property="og:type" content="website" />
			<meta name="linkedin:card" content="summary" />
			<meta name="linkedin:creator" content={site.siteMetadata?.social?.linkedin || ``} />
			<meta name="linkedin:title" content={title} />
			<meta name="linkedin:description" content={metaDescription} />
			<meta name="google-site-verification" content="QqtJyrtBQngvT--l7EEiKSi6MQp1_qz1s_3gzHqiIRk" />
			<link rel="shortcut icon" href="../static/favicon.ico" />
			<link rel="icon" href="../static/favicon.ico" />
			{children}
		</>
	);
};

export default Seo;
