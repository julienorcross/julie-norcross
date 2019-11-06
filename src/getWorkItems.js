const URL_WORKITEMS =
  'https://julnor15.dreamhosters.com/backend/wp-json/wp/v2/workitems';

async function getWorkItems() {
  const response = await fetch(URL_WORKITEMS);
  const json = await response.json();
  return json
    .map(wordpressModel => {
      const { acf, title, slug } = wordpressModel;
      const { sort_order, description, featured_image, slideshow } = acf;
      return {
        title: title.rendered,
        slug,
        sortOrder: parseInt(sort_order),
        description,
        featuredImage: {
          url: featured_image.url,
          alt: featured_image.alt,
          sizes: featured_image.sizes
        },
        slideshow: acf.slideshow.map(slide => {
          return {
            url: slide.url,
            alt: slide.alt,
            sizes: slide.sizes
          };
        })
      };
    })
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export { getWorkItems };
