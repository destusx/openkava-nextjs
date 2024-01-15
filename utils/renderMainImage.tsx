import { useLocale } from 'next-intl';
import Image from 'next/image';
import { getImagePath } from './getPathImage';
import { getImage } from '@/services/imageService';

export default async function RenderMainImage(imgName: string) {
    const image = await getImage(imgName);
    const locale: string = useLocale().toUpperCase();

    const imageUrl = getImagePath(image?.filename);

    return (
        <div className="relative w-full h-[350px] mt-3">
            <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="rounded-custom object-cover"
                src={imageUrl}
                alt={locale === 'RU' ? image.ruAlt : image.ukAlt}
                priority
            />
        </div>
    );
}
