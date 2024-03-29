'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import Tiptap from '@/components/Blog/AddPost/TipTap';
import { handleChangeMainImage } from '@/utils/fileUpload';
import { IImage } from '@/types/image.types';
import { getImagePath } from '@/utils/getPathImage';
import { baseBackendUrl } from '@/utils/constans';

function AddProject() {
    const { data: session } = useSession();
    const locale: string = useLocale().toUpperCase();
    const [content, setContent] = useState<string>('');

    const { mutate: createProject, isSuccess } = useMutation({
        mutationFn: async (post: object) => {
            const res = await fetch(`${baseBackendUrl}/projects`, {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user.token}`,
                },
            });

            return res;
        },
    });

    const [title, setTitle] = useState<string>('');
    const [image, setImage] = useState<IImage | null>(null);
    const [ruAlt, setRuAlt] = useState<string | undefined>();
    const [ukAlt, setUkAlt] = useState<string | undefined>();
    const [address, setAddress] = useState<string>('');
    const [openedData, setOpenedData] = useState<string>();
    const [floorArea, setFloorArea] = useState<number>();
    const [budget, setBudget] = useState<number>();

    const inputFileRef = useRef<HTMLInputElement>(null);

    const onAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!ruAlt || !ukAlt) {
            return alert('Введите ALT для главного изображения');
        } else {
            handleChangeMainImage(e, setImage, ruAlt, ukAlt);
        }
    };

    const onCreateProject = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (title.length < 5 || title.length > 70) {
            return alert('Заголовок от 5 до 70 символов');
        }

        if (content.length < 5 || content.length > 5000) {
            return alert('Текст от 500 до 5000 символов');
        }

        if (!image?.id) {
            return alert('Загрузите картинку');
        }

        const project = {
            title,
            content,
            image: image.id,
            language: locale,
            budget,
            address,
            openedData,
            floorArea,
        };

        createProject(project);
    };

    const imageUrl = getImagePath(image?.filename);

    return (
        <div className="container max-w-5xl">
            <h2 className="text-black text-center mt-5 mb-5">Добавить проект</h2>
            <div className="flex items-center justify-center w-full mb-2">
                {image ? (
                    <Image
                        src={imageUrl}
                        width={500}
                        height={300}
                        className="rounded-custom object-cover h-[300px] w-[100%]"
                        alt="123"
                    />
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
                        <input
                            ref={inputFileRef}
                            type="file"
                            id="fileInput"
                            onChange={onAddImage}
                            className="hidden"
                        />
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
                placeholder="Название проекта"
                className="w-full py-2 px-2 text-xl"
            />
            <div>Язык проекта: {locale}</div>
            <div className="flex gap-2 justify-between w-full">
                <input
                    type="number"
                    placeholder="Площадь"
                    value={floorArea}
                    className="border-2 p-1 rounded-lg w-1/3"
                    onChange={e => setFloorArea(+e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Адресс"
                    value={address}
                    className="border-2 p-1 rounded-lg w-2/3"
                    onChange={e => setAddress(e.target.value)}
                />
            </div>
            <div className="flex gap-2 justify-between w-full my-1">
                <input
                    type="date"
                    placeholder="Дата"
                    value={
                        openedData
                            ? new Date(openedData).toISOString().split('T')[0]
                            : ''
                    }
                    className="border-2 p-1 rounded-lg w-1/2"
                    onChange={e =>
                        setOpenedData(new Date(e.target.value).toISOString())
                    }
                />
                <input
                    type="number"
                    placeholder="Бюджет"
                    value={budget}
                    className="border-2 p-1 rounded-lg w-1/2"
                    onChange={e => setBudget(+e.target.value)}
                />
            </div>
            <Tiptap content={content} setContent={setContent} />

            <button
                className="block bg-indigo-500 text-white hover:bg-indigo-600 transition duration-200 ease-linear border border-indigo-500 py-1 px-4 rounded-2xl mx-auto text-center mb-4 mt-4"
                onClick={onCreateProject}
            >
                Отправить
            </button>
            {isSuccess ? (
                <h1 className="text-black">Проект успешно отправлен</h1>
            ) : null}
        </div>
    );
}
export default AddProject;
