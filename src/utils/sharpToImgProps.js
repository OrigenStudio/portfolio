const sharpToImgProp = imageSharp => ({
  src: imageSharp.childImageSharp.responsiveSizes.src,
  srcSet: imageSharp.childImageSharp.responsiveSizes.srcSet,
  sizes: imageSharp.childImageSharp.responsiveSizes.sizes,
});

export default sharpToImgProp;
