import { IImage } from '@/types/image.types';
import { baseBackendUrl } from './constans';

export const handleChangeMainImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<IImage | null>>,
    ruAlt: string,
    ukAlt: string
) => {
    e.preventDefault();

    try {
        const formData = new FormData();

        const file = e.target.files && e.target.files[0];

        if (file && file.type.startsWith('image/') && file.size <= 1024 * 1024) {
            formData.append('file', file);
            formData.append('ruAlt', ruAlt);
            formData.append('ukAlt', ukAlt);

            const response = await fetch(`${baseBackendUrl}/uploads`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            const { filename } = data.data;

            const imageResponse = await fetch(`${baseBackendUrl}/image/${filename}`);

            const imgData = await imageResponse.json();

            setImage(imgData);
        } else {
            alert('Загрузите картинку до 1мб');
        }
    } catch (error) {
        console.log(error);
    }
};
