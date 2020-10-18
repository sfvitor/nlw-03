import Image from '../models/image';

export default {
    render(image: Image) {
        const {
            id,
            path,
        } = image;

        return {
            id,
            url: `/uploads/${path}`,
        };
    },

    renderMany(images: Image[]) {
        return images.map(this.render);
    },
};
