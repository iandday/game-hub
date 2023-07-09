import noImage from '../assets/no-image-placeholder.webp'
const getCroppedImageURL = (url: string) => {
    
    //return empty string if url is not present
    if (!url) return noImage;
    
    const target = 'media/'
    const index = url.indexOf(target) + target.length;

    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageURL