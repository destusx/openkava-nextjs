import { Editor } from '@tiptap/react';
import {
    Bold,
    Italic,
    Strikethrough,
    Underline,
    Code2,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Pilcrow,
    List,
    ListOrdered,
    AlignCenter,
    AlignJustify,
    AlignLeft,
    AlignRight,
    PaintBucket,
    FileCode,
    Quote,
    Table,
    Image,
    Link2,
} from 'lucide-react';

const redo = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
        />
    </svg>
);
const undo = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        />
    </svg>
);

import './styles.scss';
import { useCallback, useRef } from 'react';
import { useLocale } from 'next-intl';
import { getImagePath } from '@/utils/getPathImage';
import { baseBackendUrl } from '@/utils/constans';

type MenuBarProps = {
    editor: Editor | null;
};

type SetImageArgs = {
    src: string;
    alt: string;
    title?: string;
    width: string | null;
    height: string | null;
};

const MenuBar = ({ editor }: MenuBarProps) => {
    const locale: string = useLocale().toUpperCase();
    const imgRef = useRef<HTMLInputElement>(null);
    const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            const file = e.target.files && e.target.files[0];
            if (file && file.type.startsWith('image/') && file.size <= 1024 * 1024) {
                const ruAlt = prompt('Enter RU alt');
                const ukAlt = prompt('Enter UKR alt');

                if (!ruAlt || !ukAlt) {
                    return alert('Введите ALTs');
                }

                formData.append('file', file);
                formData.append('ruAlt', ruAlt);
                formData.append('ukAlt', ukAlt);

                const response = await fetch(`${baseBackendUrl}/uploads`, {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();
                const { filename } = data.data;

                if (filename) {
                    const imageUrl = getImagePath(filename);

                    const width = prompt('Enter image width (optional):');
                    const height = prompt('Enter image height (optional):');

                    const imageArgs: SetImageArgs = {
                        src: imageUrl,
                        width,
                        height,
                        alt: locale === 'RU' ? ruAlt : ukAlt,
                    };

                    editor?.chain().focus().setImage(imageArgs).run();
                }
            } else {
                alert('Загрузите картинку до 1мб');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleButtonClick = () => {
        if (imgRef.current) {
            imgRef.current.click();
        }
    };

    const setLink = useCallback(() => {
        const previousUrl = editor?.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);

        // cancelled
        if (url === null) {
            return;
        }

        // empty
        if (url === '') {
            editor?.chain().focus().extendMarkRange('link').unsetLink().run();

            return;
        }

        // update link
        editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }, [editor]);

    if (!editor) {
        return null;
    }

    return (
        <div className="flex items-center gap-2 bg-black p-2 text-white w-full flex-wrap">
            <button
                title="bold text"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`${
                    editor.isActive('bold') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Bold />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`${
                    editor.isActive('italic') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Italic />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={`${
                    editor.isActive('strike') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Strikethrough />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={!editor.can().chain().focus().toggleUnderline().run()}
                className={`${
                    editor.isActive('underline') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Underline />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={`${
                    editor.isActive('code') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Code2 />
            </button>
            <div className="mx-1 w-[1px] flex bg-gray-500 h-6"></div>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={`${
                    editor.isActive('heading', { level: 1 })
                        ? 'is-active text-green-700'
                        : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Heading1 />
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={`${
                    editor.isActive('heading', { level: 2 })
                        ? 'is-active text-green-700'
                        : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Heading2 />
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={`${
                    editor.isActive('heading', { level: 3 })
                        ? 'is-active text-green-700'
                        : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Heading3 />
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                }
                className={`${
                    editor.isActive('heading', { level: 4 })
                        ? 'is-active text-green-700'
                        : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Heading4 />
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                }
                className={`${
                    editor.isActive('heading', { level: 5 })
                        ? 'is-active text-green-700'
                        : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Heading5 />
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                }
                className={`${
                    editor.isActive('heading', { level: 6 })
                        ? 'is-active text-green-700'
                        : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Heading6 />
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`${
                    editor.isActive('paragraph') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Pilcrow />
            </button>
            <div className="mx-1 w-[1px] flex bg-gray-500 h-6"></div>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`${
                    editor.isActive('bulletList') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <List />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`${
                    editor.isActive('orderedList') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <ListOrdered />
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                className={`${
                    editor.isActive({ textAlign: 'left' })
                        ? 'is-active text-green-700'
                        : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <AlignLeft />
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                className={`${
                    editor.isActive({ textAlign: 'center' })
                        ? 'is-active text-green-700'
                        : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <AlignCenter />
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                className={`${
                    editor.isActive({ textAlign: 'right' })
                        ? 'is-active text-green-700'
                        : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <AlignRight />
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                className={`${
                    editor.isActive({ textAlign: 'justify' })
                        ? 'is-active text-green-700'
                        : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <AlignJustify />
            </button>
            <div className="mx-1 w-[1px] flex bg-gray-500 h-6"></div>
            <button
                onClick={() => editor.chain().focus().toggleHighlight().run()}
                className={`${
                    editor.isActive('highlight') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <PaintBucket />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={`${
                    editor.isActive('codeBlock') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <FileCode />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`${
                    editor.isActive('blockquote') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Quote />
            </button>
            <button
                onClick={() =>
                    editor
                        .chain()
                        .focus()
                        .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                        .run()
                }
                className={`${
                    editor.isActive('table') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Table />
            </button>
            <button
                onClick={setLink}
                className={`${
                    editor.isActive('link') ? 'is-active text-green-700' : ''
                } p-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg`}
            >
                <Link2 />
            </button>
            <div className="mx-1 w-[1px] flex bg-gray-500 h-6"></div>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
            >
                {undo()}
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
            >
                {redo()}
            </button>
            <div className="mx-1 w-[1px] flex bg-gray-500 h-6"></div>
            <button onClick={handleButtonClick}>
                <Image />
            </button>
            <input
                hidden
                ref={imgRef}
                type="file"
                id="fileInput"
                onChange={handleChangeFile}
            />
        </div>
    );
};

export default MenuBar;
