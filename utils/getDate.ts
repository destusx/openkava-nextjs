import { format, parseISO } from 'date-fns';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { uk, ru } from 'date-fns/locale';
import { IPost } from '@/types/post.types';
import { IProject } from '@/types/project.types';

const formatPostDate = async (post: IPost | IProject) => {
    const locale = useLocale();
    const t = await getTranslations('Date');

    const postData = format(parseISO(post.createdAt), `dd MMMM yyyy ${t('year')}`, {
        locale: locale === 'ru' ? ru : uk,
    });

    return postData;
};

export default formatPostDate;
