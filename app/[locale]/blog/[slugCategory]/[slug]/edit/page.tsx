'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import Tiptap from '@/components/Blog/AddPost/TipTap';
import { useCreatePost, useGetSinglePost } from '@/hooks/useApi';
import { Language } from '@/types/lang.enum';
import { handleChangeMainImage } from '@/utils/fileUpload';
import { IImage } from '@/types/image.types';
import { getImagePath } from '@/utils/getPathImage';

interface EditPostProps {
    params: {
        slug: string;
    };
}

function EditPost({ params: { slug } }: EditPostProps) {
    const locale: string = useLocale().toUpperCase();
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [ruAlt, setRuAlt] = useState<string | undefined>();
    const [ukAlt, setUkAlt] = useState<string | undefined>();
    const [categories, setCategories] = useState<string[]>([]);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const { data: post } = useGetSinglePost(slug);
    const { mutate: createPostMutation, isSuccess } = useCreatePost();

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);
            setImage(post.image);
            console.log(post);
        }
    }, [post]);

    const onCreatePost = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (title.length < 5 || title.length > 70) {
            return alert('Заголовок от 5 до 70 символов');
        }

        if (content.length < 5 || content.length > 5000) {
            return alert('Текст от 500 до 5000 символов');
        }

        const post = {
            title,
            content,
            // image: image?.filename,
            categories: categories.map(Number),
            language: locale as Language,
        };

        // createPostMutation(post);
    };

    const onAddCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategories([e.target.value]);
    };

    const imageUrl = getImagePath(image);

    // const onAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (!ruAlt || !ukAlt) {
    //         return alert('Введите ALT для главного изображения');
    //     } else {
    //         handleChangeMainImage(e, setImage, ruAlt, ukAlt);
    //     }
    // };

    return (
        <div className="container max-w-5xl">
            <h2 className="text-black text-center mt-5 mb-5">Добавить статью</h2>
            <div className="flex items-center justify-center w-full mb-2">
                {image ? (
                    <div className="flex flex-col w-full">
                        <div className="relative w-full h-[350px]">
                            <Image
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                                className="rounded-custom object-cover"
                                src={imageUrl}
                                alt=""
                            />
                        </div>
                    </div>
                ) : (
                    <label
                        onClick={() => inputFileRef.current?.click()}
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                    Click to upload{' '}
                                </span>
                                or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF
                            </p>
                        </div>
                        {/* <input
                            ref={inputFileRef}
                            type="file"
                            id="fileInput"
                            onChange={onAddImage}
                            className="hidden"
                        /> */}
                    </label>
                )}
            </div>
            <div className="flex justify-between mt-1">
                <input
                    type="text"
                    value={ruAlt}
                    onChange={e => setRuAlt(e.target.value)}
                    placeholder="ALT главной картинки RU"
                    className="py-1 px-2 text-lg border-2 rounded-lg"
                />
                <input
                    type="text"
                    value={ukAlt}
                    onChange={e => setUkAlt(e.target.value)}
                    placeholder="ALT главной картинки UK"
                    className="py-1 px-2 text-lg border-2 rounded-lg"
                />
            </div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="Заголовок статьи"
                className="w-full py-2 px-2 text-xl border-2 rounded-lg mt-2"
            />
            <div className="flex justify-between items-center mt-1 mb-1">
                <div>Язык статьи: {locale}</div>
            </div>
            <Tiptap content={content} setContent={setContent} />

            <button
                className="block bg-indigo-500 text-white hover:bg-indigo-600 transition duration-200 ease-linear border border-indigo-500 py-1 px-4 rounded-2xl mx-auto text-center mb-4 mt-4"
                onClick={onCreatePost}
            >
                Отправить
            </button>
            {isSuccess ? (
                <h1 className="text-black">Статья успешно отправлена</h1>
            ) : null}
        </div>
    );
}
export default EditPost;
