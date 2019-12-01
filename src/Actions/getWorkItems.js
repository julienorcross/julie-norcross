const URL_WORKITEMS =
  'https://backend.julienorcross.com/wp-json/wp/v2/workitems';

async function getWorkItems() {
  const response = await fetch(URL_WORKITEMS);
  const json = await response.json();
  return json
    .map(wordpressModel => {
      const { acf, title, slug } = wordpressModel;
      const {
        sort_order,
        subtitle,
        description,
        featured_image,
        slideshow
      } = acf;
      return {
        title: title.rendered,
        subtitle: subtitle,
        slug,
        sortOrder: parseInt(sort_order),
        description,
        featuredImage: {
          url: featured_image.url,
          alt: featured_image.alt,
          sizes: featured_image.sizes
        },
        slideshow: slideshow.map(slide => ({
          url: slide.url,
          alt: slide.alt,
          sizes: slide.sizes
        }))
      };
    })
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export default getWorkItems;
